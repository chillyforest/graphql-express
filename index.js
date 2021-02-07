const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');
const models = require('./src/db');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        models
    }
});

const app = express();

server.applyMiddleware({ app })

app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
})
