// const YOUTUBE_PLAYLIST_ITEMS_API =
//   "https://www.googleapis.com/youtube/v3/playlistItems";
import { cookies } from "next/headers";

import Subscriptions from "./Subscriptions";

async function getData() {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/subscriptions?key=${process.env.YOUTUBE_DATA_API_KEY}`,
    {
      headers: {
        Authorization: `Bearer ${cookies().get("youtube_access_token")}`,
        Accept: "application/json",
      },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  //   const data = await getData();
  return (
    <main>
      <Subscriptions />
    </main>
  );
}
