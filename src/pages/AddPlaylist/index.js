import { Button, Divider, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useNavigate } from "react-router";
import MiniDrawer from "../../components/SideBar";
import { createPlaylist } from "../../services/playlists";
import { Container, Input, TitleScreen } from "./style";

const styles = {
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: "100vw",
    maxWidth: "800px",
    height: "80vh",

    margin: "0 auto",
    border: "2px solid #201f1f",

    gap: "20px",
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

export default function AddPlaylist() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    icon: "",
    description: "",
  });

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { title, icon, description } = formData;

    try {
      await createPlaylist({ title, icon, description });
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.message);
        return;
      }
    }
  }

  return (
    <Container>
      <MiniDrawer />
      <Box sx={styles.box} component="form" onSubmit={handleSubmit}>
        <Typography sx={styles.title} variant="h4" component="h1">
          <TitleScreen>New Playlist</TitleScreen>
        </Typography>
        <Paper elevation={3} />
        <Input
          name="title"
          placeholder="Title"
          onChange={handleInputChange}
          value={formData.title}
          required
        />
        <Input
          name="icon"
          placeholder="Icon"
          onChange={handleInputChange}
          value={formData.icon}
        />
        <Input
          name="description"
          placeholder="Description"
          onChange={handleInputChange}
          value={formData.description}
        />
        <Button sx={styles.button} variant="contained" type="submit">
          Send
        </Button>
      </Box>
    </Container>
  );
}
