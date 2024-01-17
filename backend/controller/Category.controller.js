const parseFields = require('graphql-parse-fields');
const { executeQuery } = require('../utility');
const { parcourirObjet } = require('../utility/utility');

module.exports.getCategories= async (info)=>{
    try {
        //récupérer les champs de retour spécifiés par le client
        let {champsObjet}= parcourirObjet(parseFields(info))
        champsObjet = champsObjet.filter(field=>field!=='__typename')
        const query = `SELECT ${champsObjet.join(",")} FROM  Category`;
        const categories = await executeQuery(query);
        return categories
    } catch (error) {
        console.log(error)
    }
}


module.exports.getOneCategory=async(_,args,contextValue,info)=>{
    const {champsObjet}= parcourirObjet(parseFields(info))
    const {id} = args; 
    const query = `SELECT ${champsObjet.join(",")} FROM Category WHERE id = ?`;
    const category = await executeQuery(query,[id])
    return category[0]
}
module.exports.getCategoryWithArticles=async(parent,args,contextValues,infos)=>{
    const {champsObjet}= parcourirObjet(parseFields(infos))
    const query = `SELECT ${champsObjet.join(",")} FROM Article WHERE categoryId=?`
    const categories = await executeQuery(query,[parent.id])
    return categories
}
module.exports.createCategory=async(parent,args,contextValue,info)=>{
    const fields = getFieldNames(info) || ['id'];
    const {category} = args
    const { name } = category
    const query=`INSERT INTO Category(name) VALUES(?) RETURNING ${fields.join(",")}`;
    const newCategory= await executeQuery(query,[name])
    return newCategory[0];
}