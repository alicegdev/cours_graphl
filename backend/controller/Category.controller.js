module.exports.getCategoryWithArticles=async(parent,args,contextValues,infos)=>{
    const {champsObjet}= parcourirObjet(parseFields(infos))
    console.log("getCategoryWithArticles",champsObjet)
    const query = `SELECT ${champsObjet.join(",")} FROM Article WHERE categoryId=?`
    const articles = await executeQuery(query,[parent.id])
    return articles
}