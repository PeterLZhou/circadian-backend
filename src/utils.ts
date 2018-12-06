import btoa from 'btoa';
import { verify } from 'jsonwebtoken';
export const APP_SECRET = "appsecret321";

interface Token {
  userId: string;
}

interface Context {
  request: any;
}

export function getUserId(context: Context) {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const verifiedToken = verify(token, APP_SECRET) as Token;
    return verifiedToken && verifiedToken.userId;
  }
}

export function base64Hash(value: string) {
  return Buffer.from(value, "binary").toString("base64");
}

export const getBackendUrl = () => {
  if (process.env.ENVIRONMENT == "production") {
    return "https://circadian-server.herokuapp.com";
  } else if (process.env.ENVIRONMENT == "staging") {
    return "";
  } else if (process.env.ENVIRONMENT == "development") {
    return "http://localhost:4000";
  }
};

export const getFrontendUrl = () => {
  if (process.env.ENVIRONMENT == "production") {
    return "https://circadian-web.herokuapp.com";
  } else if (process.env.ENVIRONMENT == "staging") {
    return "";
  } else if (process.env.ENVIRONMENT == "development") {
    return "http://localhost:3000";
  }
};
