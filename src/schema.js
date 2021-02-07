const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        desserts: [Dessert]
    }

    type Dessert {
        id: ID!
        dname: String
        calories: Int
        fat: Int
        carbs: Int
        protein: Int
    }

    type Mutation {
        createDessert (
            dname: String!
            calories: Int!
            fat: Int!
            carbs: Int!
            protein: Int!
        ): Dessert!
        deleteDessert (
            ids: [ID!]!
        ): Boolean!
    }
`

module.exports = typeDefs;
