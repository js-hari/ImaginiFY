import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware(); // Add a semicolon here

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};