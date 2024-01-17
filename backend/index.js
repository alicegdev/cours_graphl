const { ApolloServer,gql } = require('apollo-server-express');
const express = require('express');
const  resolvers = require('./graphql/resolvers');

const app = express();

const  typeDefs = require('./graphql/schema');

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