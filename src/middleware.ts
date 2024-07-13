import {
  clerkMiddleware,
  ClerkMiddlewareAuth,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/forum(.*)"]);

export default clerkMiddleware(
  (auth: ClerkMiddlewareAuth, req: NextRequest) => {
    if (!auth().userId && isProtectedRoute(req)) {
      // Add custom logic to run before redirecting

      return auth().redirectToSignIn();
    }
  }
);
