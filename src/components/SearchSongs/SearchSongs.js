import { Avatar, Box, Container, Typography } from "@mui/material";
import axios from "axios";
import dotenv from "dotenv";
import { useState } from "react";
import { useEffect } from "react";

dotenv.config();

function SearchSongs({ keyword }) {
  const [token, setToken] = useState("");
  const [tracksDetails, setTracksDetails] = useState([]);

  var spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  var spotify_client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  function getApiData(keyword) {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify_client_id + ":" + spotify_client_secret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);

      axios(
        `https://api.spotify.com/v1/search?q=${keyword}&type=track&limit=10`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + tokenResponse.data.access_token,
          },
        }
      ).then((response) => {
        setTracksDetails(response.data.tracks.items);
      });
    });
  }

  useEffect(() => {
    if (keyword !== "") getApiData(keyword);
    else setTracksDetails([]);
  }, [keyword, spotify_client_id, spotify_client_secret]);

  return (
    <Container>
      {tracksDetails.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Avatar
              src={item.album.images[2].url}
              alt={item.name}
              variant="square"
            />
            <div>
              <Typography>{item.name}</Typography>
              <Typography>{item.artists[0].name}</Typography>
            </div>
          </Box>
          <Typography sx={{ display: "flex", justifyContent: "flex-end" }}>
            {item.album.name}
          </Typography>
        </Box>
      ))}
    </Container>
  );
}

export default SearchSongs;
