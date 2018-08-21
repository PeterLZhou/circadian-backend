import resolvers from './resolvers/resolvers';
import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: "http://localhost:4466"
    })
  })
});
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`)
);
