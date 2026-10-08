export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/projects/:path*"
        // path that starts with project indi ma access
        
    ]
}