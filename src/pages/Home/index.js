import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
import Listbox from "../../components/ListBox";
import MiniDrawer from "../../components/SideBar";

dotenv.config();

export default function Home() {
  const [token, setToken] = useState("");

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
  const [trackDetail, setTrackDetail] = useState(null);

  var spotify_client_id = "e529efd86cf04fcaa28f718c2d5cdcba";
  var spotify_client_secret = "ee12f3b8e1c74efabdef9c0e1fc12ab5";

  useEffect(() => {
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
            Authorization: "Bearer " + token,
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
                    Authorization: "Bearer " + tokenResponse.data.access_token,
                  },
                }
              ).then((tracksResponse) => {
                listTracks.push(...tracksResponse.data.items);
                setTracks({
                  selectedTrack: tracks.selectedTrack,
                  listOfTracksFromAPI: listTracks,
                });
              });
            });
          });
        });
      });
    });
  }, [genres.selectedGenre, spotify_client_id, spotify_client_secret]);

  return (
    <Container>
      <MiniDrawer />
      <div className="row">
        <Listbox items={tracks.listOfTracksFromAPI} />
      </div>
    </Container>
  );
}
