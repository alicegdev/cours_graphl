const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Article {
     "ce champ represente l'id de l'article"
      id: ID!
      title: String!
      content: String!
      author: String!
      categoryId:ID
      createdAt:String
    }

    type User {
    id: ID!
    lastname: String!
    firstname: String!
    }
    
    type Category{
    id:ID!
    name: String!
    articles: [Article]
  }
  
    # ce type est encore visible
    type Comment{
      """
        commentaire multi lignes ici
        commentaire multi lignes ici
        commentaire multi lignes ici
        commentaire multi lignes ici
      """
      id:ID!
      author:String!
      "ici un commentaire mono ligne"
      content:String!
      createdAt:String
      articleId:ID
    }  
    
    type Query {
      me:String,
      articles: [Article]!
      article(id:ID!):Article,
      user(id:ID!):User
    }
    type Mutation{
      me:String
    }
    input InputArticle{
    title: String!
    content: String!
    author: String!
    categoryId:ID!
  },

  input InputUser{
    id: ID!
    lastname: String!
    firstname: String!
  }
  type Mutation{
    addArticle(article:InputArticle):Article,
    deleteArticle(id:ID):Article,
    updateArticle(id:ID!,article:InputArticle!):Article,
    addUser(user:InputUser):User,
    deleteUser(id:ID):User,
  }
`;
module.exports = typeDefs
