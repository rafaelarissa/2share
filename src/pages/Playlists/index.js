import { Api } from "@mui/icons-material";
import { useEffect, useState } from "react";
import MiniDrawer from "../../components/SideBar";
import { listPlaylists } from "../../services/playlists";
import { Container } from "../AddPlaylist/style";

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function loadPage() {
      const playlistsData = await listPlaylists();
      setPlaylists(playlistsData);
      console.log(playlistsData);
    }
    loadPage();
  }, []);

  return (
    <Container>
      <MiniDrawer />
      {playlists.length !== 0
        ? playlists.map((playlist, index) => (
            <div key={index}>{playlist.title}</div>
          ))
        : "There're no playlists yet"}
    </Container>
  );
}
