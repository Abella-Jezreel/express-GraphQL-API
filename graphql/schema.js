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

    type AuthData {
        token: String!
        userId: String!
    }

    input UserInput {
        email: String!
        password: String!
        name: String!
    }

    input PostInput {
        title: String!
        content: String!
        imageUrl: String!
    }

    type RootMutation {
        createUser(userInput: UserInput): User!
        createPost(postInput: PostInput): Post!
        updatePost(postId: ID!, postInput: PostInput): Post!
        deletePost(postId: ID!): Boolean
    }

    type TestData {
        text: String!
        views: Int!
    }

    type PostData {
        posts: [Post!]!
        totalPosts: Int!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        getPosts(page: Int!): PostData!
        getPost(postId: ID!): Post!
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `);
