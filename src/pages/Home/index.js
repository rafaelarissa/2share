import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();

export default function Home() {
  const [token, setToken] = useState("");
  var spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
  var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

  useEffect(() => {
    axios
      .get(
        "https://accounts.spotify.com/authorize?response_type=code&client_id=e5b97cbfa717430682bea67a961be3b8&scope=user-read-private%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A8888%2Fnew-playlist&state=yM4kPxQyelGY4G4o%22"
        // {
        // headers: {
        //   "Content-Type": "application/x-www-form-urlencoded",
        //   Authorization:
        //     "Basic " + btoa(spotify_client_id + ":" + spotify_client_secret),
        // },
        // data: "grant_type=client_credentials",
        // method: "POST",
        // }
      )
      .then((tokenResponse) => {
        console.log(tokenResponse);
        setToken(tokenResponse.data.access_token);
      })
      .catch((error) => console.log(error));
  }, []);
  return <Container>teste alo som</Container>;
}
