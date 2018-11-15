import * as bodyParser from 'body-parser';
import axios from 'axios';
import { base64Hash } from './utils';
import { fetchAggregateSteps } from './api/googlefit/aggregate';
import { GraphQLServer } from 'graphql-yoga';
import { permissions } from './permissions';
import { prisma } from './generated/prisma-client';
import { resolvers } from './resolvers';

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers: resolvers as any,
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      db: prisma
    };
  }
});

// CORS
server.express.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// BodyParsing for JSON
server.express.use(bodyParser.json());
server.express.use(bodyParser.urlencoded({ extended: true }));

server.express.get("/hello", (req, res) => {
  fetchAggregateSteps("me", 1538798400000, 1541217600000);
  res.send("HELLO NONGRAPHQL ENDPOINT");
});

server.express.get("/oauthcallback", (req, res) => {});

server.express.post("/user/:id/googlefitauthenticate", (req, res) => {
  const userId = req.params.id;
  const oneTimeCode = req.body.code;
  // WE ARE HERE, NOW TO REFRESH THE TOKEN!
});

server.express.post("/user/:id/fitbitauthenticate", async (req, res) => {
  const userId = req.params.id;
  const oneTimeCode = req.body.code;
  console.log("HERE");
  console.log(userId);
  console.log(oneTimeCode);
  console.log("SENDING");
  const response = axios
    .post(
      "https://api.fitbit.com/oauth2/token",
      JSON.stringify({
        code: oneTimeCode,
        grant_type: "authorization_code",
        client_id: process.env.FITBIT_CLIENT_ID
      }),
      {
        headers: {
          Authorization: `Basic ${base64Hash(
            `${process.env.FITBIT_CLIENT_ID}:${
              process.env.FITBIT_CLIENT_SECRET
            }`
          )}`
        }
      }
    )
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      // console.log(error);
      console.log(error);
      console.log(error.response.data.errors);
    });
  // console.log("OK");
  // console.log(response.data);
  // WE ARE HERE, NOW TO REFRESH THE TOKEN!
});

server.start(() => console.log("Server is running on http://localhost:4000"));
