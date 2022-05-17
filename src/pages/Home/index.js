import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          btoa(
            "e529efd86cf04fcaa28f718c2d5cdcba" +
              ":" +
              "ee12f3b8e1c74efabdef9c0e1fc12ab5"
          ),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    })
      .then((tokenResponse) => {
        console.log(tokenResponse);
        setToken(tokenResponse.data.access_token);
      })
      .catch((error) => console.log(error));
  }, []);
  return <Container>teste alo som</Container>;
}
