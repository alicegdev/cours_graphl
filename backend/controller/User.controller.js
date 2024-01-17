const parseFields = require('graphql-parse-fields');
const { executeQuery } = require('../utility');
const { parcourirObjet } = require('../utility/utility');

module.exports.getOneUser = async (_, arg, contextValue, info) => {
    const {champsObjet}= parcourirObjet(parseFields(info))
    const {id} = arg; 
    const query = `SELECT ${champsObjet.join(",")} FROM User WHERE id = ?`;
    const user = await executeQuery(query,[id])
    console.log(user[0])
    return user[0]
}

module.exports.createUser=async(parent,args,contextValue,info)=>{
    const {champsObjet}= parcourirObjet(parseFields(info))
    const {user} = args
    const { id, lastname, firstname } = user
    const query=`INSERT INTO User(id, lastname, firstname) VALUES(?,?,?) RETURNING ${champsObjet.join(",")}`;
    const newUser= await executeQuery(query,[id, lastname, firstname])
    return newUser[0];
}

module.exports.removeUser=async(parent,args,contextValue,info)=>{
    
    try {
        const {champsObjet}= parcourirObjet(parseFields(info))
        const {id} = args
        const query = `DELETE FROM User WHERE id = ? RETURNING ${champsObjet.join(",")}`
        const deletedUser = await executeQuery(query,[id]);
        return deletedUser[0]
    } catch (error) {
        console.log(error)
    }

}

module.exports.putUser=async(parent,args,contextValue,info)=>{
    try {
        const {champsObjet}= parcourirObjet(parseFields(info))
        const {user} = args
        const {id,lastname,firstname} = user
         const query = `
            UPDATE User
            SET id=?, lastname=?, firstname=?,
            WHERE id=?;
        `;
         await executeQuery(query,[id,lastname,firstname]);
         const userUpdated = await executeQuery(`SELECT ${champsObjet.join(",")} FROM User WHERE id=?`,[id]);
        return userUpdated[0]
    } catch (error) {
        console.log(error)
    }
}