import * as bodyParser from "body-parser";
import * as querystring from "querystring";
import axios from "axios";
import { base64Hash, getFrontendUrl } from "./utils";
import { fetchAggregateSteps } from "./api/googlefit/aggregate";
import { getAllUpdatedSleepLogs, getSleepLogs } from "./api/fitbit/sleep";
import { GraphQLServer } from "graphql-yoga";
import { permissions } from "./permissions";
import { prisma } from "./generated/prisma-client";
import { resolvers } from "./resolvers";

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

  axios({
    method: "post",
    url:
      "https://api.fitbit.com/oauth2/token?" +
      querystring.stringify({
        grant_type: "authorization_code",
        code: oneTimeCode,
        client_id: process.env.FITBIT_CLIENT_ID,
        redirect_uri: getFrontendUrl() + "/auth/fitbit"
      }),
    data: {},
    headers: {
      Authorization: `Basic ${base64Hash(
        `${process.env.FITBIT_CLIENT_ID}:${process.env.FITBIT_CLIENT_SECRET}`
      )}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
    .then(async response => {
      const payload = response.data;
      let expirationDate = new Date();
      expirationDate.setSeconds(
        expirationDate.getSeconds() + payload.expires_in
      );

      const existingAccountId = await prisma
        .fitbitAccount({
          userId: userId
        })
        .id();
      if (!existingAccountId) {
        prisma
          .createFitbitAccount({
            userId: userId,
            accessToken: payload.access_token,
            refreshToken: payload.refresh_token,
            fitbitUserId: payload.user_id,
            expiration: expirationDate.toISOString()
          })
          .then(acct => {})
          .catch(error => {
            console.log(error);
          });
      } else {
        let acct = prisma
          .updateFitbitAccount({
            data: {
              userId: userId,
              accessToken: payload.access_token,
              refreshToken: payload.refresh_token,
              fitbitUserId: payload.user_id,
              expiration: expirationDate.toISOString()
            },
            where: {
              userId: userId,
              id: existingAccountId
            }
          })
          .then(ok => {})
          .catch(error => {
            console.log(error);
          });
      }
    })
    .catch(error => {
      // console.log(error);
      console.log("fucked up");
      console.log(error.response.data.errors);
    });
  res.send(200);
});

server.start(() => console.log("Server is running on http://localhost:4000"));
