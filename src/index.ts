import resolvers from './resolvers/resolvers';
import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';


const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint:
        process.env.NODE_ENV === "prod"
          ? "https://circadian-backend.herokuapp.com/circadian-backend/dev"
          : "http://localhost:4466"
    })
  })
});
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`)
);
