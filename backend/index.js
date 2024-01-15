const { ApolloServer,gql } = require('apollo-server-express');
const express = require('express');

const app = express();

const typeDefs= gql`
type Query{
  me:String
}
`
const resolvers = {
  Query:{}
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers
 });
 
async function startApolloServer() {
    await server.start();
    server.applyMiddleware({ app });
  
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
    });
  }
  startApolloServer();