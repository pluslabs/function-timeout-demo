import { TIMEOUT } from "@/constants/TIMEOUT";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async () => {
  await new Promise((resolve) => setTimeout(resolve, TIMEOUT));

  return new NextResponse("OK", {
    headers: {
      ContentType: "text/plain",
    },
  });
};
