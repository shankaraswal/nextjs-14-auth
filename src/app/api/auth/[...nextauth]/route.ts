import NextAuth from "next-auth/next";
import { authConfigProviders } from "./authConfigProviders";

const handler = NextAuth(authConfigProviders);
export { handler as GET, handler as POST };
