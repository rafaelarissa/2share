import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import { useNavigate } from "react-router-dom";
import MiniDrawer from "../../components/SideBar";
import DenseTable from "../../components/Table";
import useAlert from "../../hooks/useAlert";
import useAuth from "../../hooks/useAuth";
import { listPlaylists } from "../../services/playlists";
import { Container, TitleScreen } from "../AddPlaylist/style";

const styles = {
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: "100%",
    maxWidth: "800px",
    height: "80vh",

    margin: "0 auto",
    border: "2px solid #201f1f",

    gap: "15px",
  },
  button: {
    width: "100px",
    borderRadius: "10px",
    color: "#121212",
    backgroundColor: "#ffffff",
    borderColor: "Helvetica",
    fontWeight: "bold",
    fontSize: 10,
    "&:hover": {
      backgroundColor: "#fff",
      color: "#121212",
      transform: "scale(1.1)",
    },
  },
};

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const { setMessage } = useAlert();
  const {auth} = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    async function loadPage() {
      if (!auth) {
        setMessage({
          type: "error",
          text: "You have to be logged in!",
        });
        setIsLoading(false)
        navigate("/login");
        return;
      }

      const playlistsData = await listPlaylists(auth);
      setPlaylists(playlistsData);
      setIsLoading(false)
    }
    loadPage();
  }, []);

  return (
    <>
    {isLoading ? <Box sx={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}><TailSpin /></Box>:
    <Container>
      <MiniDrawer />
      <Typography sx={styles.title} variant="h3" component="h1">
        <TitleScreen>Playlists</TitleScreen>
      </Typography>
      {playlists.length !== 0 ? (
        <DenseTable playlists={playlists} />
      ) : (
        "There're no playlists yet"
      )}
    </Container>
    }
    </>
  );
}
