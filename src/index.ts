import { ApolloServer } from "apollo-server";

import {
  animals,
  categories,
  mainCards
} from "./resolvers/animal/db";

import typeDefs from "./schema";
import resolvers from "./resolvers";

const server: ApolloServer = new ApolloServer({
  typeDefs,
  
  resolvers,

  context: {
    animals,
    categories,
    mainCards,
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`[APOLLO SERVER] Server ready at ${url}`);
});