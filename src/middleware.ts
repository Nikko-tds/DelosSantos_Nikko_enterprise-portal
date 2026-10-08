import NextAuth from "next-auth";
import { authConfig } from "./server/auth/config";

export default NextAuth(authConfig).auth;

export const config = {
    matcher: [
        "/projects/:path*"
        // path that starts with project indi ma access
        
    ]
}