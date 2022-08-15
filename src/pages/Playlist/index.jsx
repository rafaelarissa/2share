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
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import { useNavigate, useParams } from "react-router-dom";
import AddSongsToPlaylist from "../../components/AddSongsToPlaylist";
import SearchSongs from "../../components/SearchSongs/SearchSongs";
import useAlert from "../../hooks/useAlert";
import useAuth from "../../hooks/useAuth";
import { getSinglePlaylist } from "../../services/playlists";

export default function PlaylistPage() {
  const { auth } = useAuth();
  const { id } = useParams();
  const { setMessage } = useAlert();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    async function loadPage() {
      if (!auth) {
        setMessage({
          type: "error",
          text: "You have to be logged in!",
        });
        navigate("/login");
        return;
      }
      const playlistData = await getSinglePlaylist(auth,id);
      setPlaylist(playlistData[0]);
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
          <Box sx={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}><TailSpin /></Box>:
        </>
      ) : (
        <>
          <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
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
              <Container maxWidth="xl">
                <Typography variant="overline">PLAYLIST</Typography>
                <Typography variant="h1">{playlist.title}</Typography>
                <Typography>{playlist.description}</Typography>
              </Container>
            </Paper>
              {isSelected ? <AddSongsToPlaylist /> : <></>}
            <Box sx={{display: "flex", flexDirection: "column", paddingLeft: 4, gap: 2}}>
              <Typography variant="h5">Add new songs to your playlist</Typography>
              <TextField
                placeholder="Search for songs"
                onChange={handleInputChange}
                value={keyword}
                size="small"
                sx={{width: 333, backgroundColor: "#424242", borderColor: "#424242"}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              <SearchSongs keyword={keyword} setIsSelected={setIsSelected}/>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
