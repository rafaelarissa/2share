import { Box, Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
import Listbox from "../../components/ListBox";
import MiniDrawer from "../../components/SideBar";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";

dotenv.config();

export default function Home() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });
  const [playlist, setPlaylist] = useState({
    selectedPlaylist: "",
    listOfPlaylistFromAPI: [],
  });
  const [tracks, setTracks] = useState({
    selectedTrack: "",
    listOfTracksFromAPI: [],
  });

  var spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  var spotify_client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  useEffect(() => {
    function loadPage() {
      if (!auth) navigate("/login");

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
          "https://api.spotify.com/v1/browse/categories?locale=pt_BR&limit=5",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + tokenResponse.data.access_token,
            },
          }
        ).then((genreResponse) => {
          setGenres({
            selectedGenre: genres.selectedGenre,
            listOfGenresFromAPI: genreResponse.data.categories.items,
          });
          let listTracks = [];

          genreResponse.data.categories.items.map((category) => {
            axios(
              `https://api.spotify.com/v1/browse/categories/${category.id}/playlists?limit=5`,
              {
                method: "GET",
                headers: {
                  Authorization: "Bearer " + tokenResponse.data.access_token,
                },
              }
            ).then((playlistResponse) => {
              setPlaylist({
                selectedPlaylist: playlist.selectedPlaylist,
                listOfPlaylistFromAPI: playlistResponse.data.playlists.items,
              });
              setToken(tokenResponse.data.access_token);

              playlistResponse.data.playlists.items.map((playlist) => {
                axios(
                  `https://api.spotify.com/v1/playlists/${playlist.id}/tracks?limit=5`,
                  {
                    method: "GET",
                    headers: {
                      Authorization:
                        "Bearer " + tokenResponse.data.access_token,
                    },
                  }
                ).then((tracksResponse) => {
                  listTracks.push(...tracksResponse.data.items);
                  setTracks({
                    selectedTrack: tracks.selectedTrack,
                    listOfTracksFromAPI: listTracks,
                  });
                  setIsLoading(false)
                });
              });
            });
          });
        });
        
      });
    }
    loadPage();
  }, [auth, genres.selectedGenre, spotify_client_id, spotify_client_secret]);

 
  return (
    <>
    {isLoading ? <Box sx={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}><TailSpin /></Box>:   
    <Container>
      <MiniDrawer />
      <div className="row">
        <Listbox items={tracks.listOfTracksFromAPI} />
      </div>
    </Container>
    }
    </>
  );
  
  
}
