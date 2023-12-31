// const YOUTUBE_PLAYLIST_ITEMS_API =
//   "https://www.googleapis.com/youtube/v3/playlistItems";

import PlayList from "./_PlayList";

async function getData() {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCNJuJfXCKNWu4-VifYixs8A&key=${process.env.YOUTUBE_DATA_API_KEY}`
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
  const data = await getData();
  return <main>${JSON.stringify(data)}</main>;
}
