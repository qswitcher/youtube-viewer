import Image from "next/image";
import data from "./data.json";
import { google } from "googleapis";
import { redirect } from "next/navigation";

const login = () => {
  const oauth2Client = new google.auth.OAuth2(
    process.env.YOUTUBE_CLIENT_ID,
    process.env.YOUTUBE_CLIENT_SECRET,
    process.env.YOUTUBE_REDIRECT_URL
  );

  // generate a url that asks permissions for Blogger and Google Calendar scopes
  const scopes = ["https://www.googleapis.com/auth/youtube.readonly"];

  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: "offline",

    // If you only need one scope you can pass it as a string
    scope: scopes,
  });

  return url;
};

const Subscriptions = () => {
  //   const redirectUrl = login();
  //   if (redirectUrl) {
  //     redirect(redirectUrl);
  //   }
  return (
    <main>
      {data?.items.map((item) => (
        <div key={item.id}>
          <div>
            <Image
              alt={item?.snippet?.title}
              src={item?.snippet?.thumbnails.medium.url}
              width={240}
              height={240}
            />
            <div>{item?.snippet.title}</div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Subscriptions;
