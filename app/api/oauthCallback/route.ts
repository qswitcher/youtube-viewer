import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.YOUTUBE_CLIENT_ID,
  process.env.YOUTUBE_CLIENT_SECRET,
  process.env.YOUTUBE_REDIRECT_URL
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  if (code) {
    const { tokens } = await oauth2Client.getToken(code);
    return Response.json({ tokens });
  }

  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id");
  // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     "API-Key": process.env.DATA_API_KEY,
  //   },
  // });
  // const product = await res.json();
  return Response.json({ status: code });
}
