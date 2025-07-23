import { User } from "./user";

interface payload extends User {
  accessToken: string;
}

declare module "next-auth" {
  interface Session {
    user: payload;
  }
}
