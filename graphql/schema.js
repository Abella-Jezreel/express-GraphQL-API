const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type User {
        _id: ID!
        email: String!
        password: String
    }

    input UserInput {
        email: String!
        password: String!
    }

    type RootMutation {
        createUser(userInput: UserInput): User!
    }

    type TestData {
        text: String!
        views: Int!
    }

    type RootQuery {
        hello: TestData!
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `);
