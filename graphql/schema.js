const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String!
        posts: [Post!]!
    }

    input UserInput {
        email: String!
        password: String!
        name: String!
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
