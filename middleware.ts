import { v4 } from "uuid";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION_ID = "YTVID";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const sessionId = request.cookies.get(SESSION_ID);
  if (!sessionId) {
    const response = NextResponse.next();
    response.cookies.set(SESSION_ID, v4());
    return response;
  }
}

// See "Matching Paths" below to learn more
