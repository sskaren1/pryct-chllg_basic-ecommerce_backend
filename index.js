import { ApolloServer, gql } from "apollo-server";
import { typeDefs } from './db/schema.js'
import { resolvers } from './db/resolvers.js'
// Importing Environment Variables
import dotenv from "dotenv";
// Importing db
import connectDB from "./config/db.js";

// Setting environment variables
dotenv.config();

// Connecting to database
connectDB();

// servidor
const server = new ApolloServer({
    typeDefs,
    resolvers
});
// arranzar el servidor
server.listen().then(({url}) => {
    console.log(`Servidor listo en la URL ${url}`);
})
