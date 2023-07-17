import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  ignoredRoutes: ["/((?!api|trpc))(_next|.+\..+)(.*)"]
};