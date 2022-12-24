import { gql } from "apollo-server";

// schema
export const typeDefs = gql`
    # types
    type Product{
        id: ID
        name: String
        price: Float
        image: String
    }
    type Order {
        id: ID
        order: [OrderGroup]
        total: Float
        shipping: Float
        taxes: Float
        code: String
        delivery_date: String
        status: StatusOrder
    }
    type OrderGroup{
        id: ID
        count: Int
        name: String
        price: Float
    }

    # inputs
    input ProductInput {
        name: String!
        price: Float!
        image: String!
    }
    input OrderProductInput {
        id: ID,
        count: Int
    }
    input OrderInput {
        order: [OrderProductInput]
        total: Float!
        shipping: Float!
        taxes: Float!
        code: String!
        delivery_date: String!
        status: StatusOrder
    }
    enum StatusOrder {
        Pendiente
        Completado
        Cancelado
    }

    type Query{
        # Products
        getProducts : [Product]
        getProduct(id: ID!): Product
    }

    type Mutation {
        # Products
        newProduct(input: ProductInput) : Product
        updateProduct( id: ID!, input: ProductInput) : Product
        deleteProduct( id:ID! ) : String

        # Orders
        newOrder( input: OrderInput) : Order

    }
`;