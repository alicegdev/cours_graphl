
const { getArticles, getOneArticle } = require("../controller/Article.controller");
const { getOneUser, createUser, removeUser } = require("../controller/User.controller");

const resolvers = {
    Query: {
      //queries articles
        articles: (_, args, context, info) => getArticles(info),
        article: (_, args, contextValue, info) => getOneArticle(_, args, contextValue, info),
        user: (_, args, contextValue, info) => getOneUser(_, args, contextValue, info)
    },
        Mutation:{
            addArticle: (parent, args, contextValue, info) => createArticle(parent, args, contextValue, info),
            deleteArticle: (parent, args, contextValue, info) => removeArticle(parent, args, contextValue, info),
            addUser: (parent, args, contextValue, info) => createUser(parent, args, contextValue, info),
            deleteUser: (parent, args, contextValue, info) => removeUser(parent, args, contextValue, info)
    },
          Category:{
      articles:(parent,args,contextValues,infos)=>getCategoryWithArticles(parent,args,contextValues,infos)
    }
  };

  module.exports = resolvers