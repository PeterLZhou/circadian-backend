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
