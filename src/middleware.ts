import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";



export default withAuth(
  async function middleware(request: NextRequest) {
    console.log(request)
  }, {
  isReturnToCurrentPage: true,
})