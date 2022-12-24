import { gql } from "apollo-server";

// schema
export const typeDefs = gql`
    type Product{
        id: ID
        name: String
        price: Float
        image: String
    }

    input ProductInput {
        name: String!
        price: Float!
        image: String!
    }

    type Query{
        #Products
        getProducts : [Product]
        getProduct(id: ID!): Product
    }

    type Mutation {
        #Products
        newProduct(input: ProductInput) : Product
        updateProduct( id: ID!, input: ProductInput) : Product
        deleteProduct( id:ID! ) : String
    }
`;