import { gql } from "apollo-server";

// schema
export const typeDefs = gql`
    type Producto {
        nombre: String
        precio: String
    }
    type Query{
        obtenerProductos : [Producto ]
    }
`;