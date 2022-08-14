import { Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AddSongsToPlaylist from "../../components/AddSongsToPlaylist";
import Loading from "../../components/Loading/Loading";
import SearchSongs from "../../components/SearchSongs/SearchSongs";
import { getSinglePlaylist } from "../../services/playlists";

export default function PlaylistPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    async function loadPage() {
      const playlistData = await getSinglePlaylist(id);
      setPlaylist(playlistData);
      setIsLoading(false);
    }
    loadPage();
  }, []);

  function handleInputChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Box>
            <Paper
              sx={{
                display: "flex",
                paddingLeft: 4,
                paddingTop: 5,
                paddingBottom: 3,
                background: "rgb(0,0,0)",
                background:
                  "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(69,69,69,1) 73%, rgba(129,129,129,1) 100%)",
              }}
            >
              <Avatar
                src={playlist.icon}
                variant="square"
                sx={{
                  width: 260,
                  height: 260,
                  boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
                }}
              />
              <Container>
                <Typography variant="overline">PLAYLIST</Typography>
                <Typography variant="h1">{playlist.title}</Typography>
                <Typography>{playlist.description}</Typography>
              </Container>
            </Paper>
            {isSelected ? <AddSongsToPlaylist /> : <></>}
            <TextField
              placeholder="Search for songs"
              onChange={handleInputChange}
              value={keyword}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <SearchSongs keyword={keyword} setIsSelected={setIsSelected} />
          </Box>
        </>
      )}
    </>
  );
}
