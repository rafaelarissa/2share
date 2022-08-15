import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import { useNavigate } from "react-router";
import MiniDrawer from "../../components/SideBar";
import useAlert from "../../hooks/useAlert";
import useAuth from "../../hooks/useAuth";
import { createPlaylist } from "../../services/playlists";
import { Container, Input, TitleScreen } from "./style";

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

export default function AddPlaylist() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { setMessage } = useAlert();
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    icon: "",
    description: "",
  });

  useEffect(() => {
    function loadPage() {
      if (!auth) {
        setMessage({
          type: "error",
          text: "You have to be logged in!",
        });
        setIsLoading(false)
        navigate("/login");
        return;
      }
    }
    loadPage();
  }, [auth]);

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true)

    if (!formData?.title) {
      setMessage({type: "error", text: "Title required!"})
    }

    const { title, icon, description } = formData;

    try {
      await createPlaylist(auth,{ title, icon, description });
      setMessage({type: "success", text: "Playlist created!"})
      setIsLoading(false)
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        return;
      }
      console.log(error);
      alert("Error, try again later!");

      setIsLoading(false)
    }
  }

  return (
    <>
    {isLoading ? <TailSpin />:
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
}</>
  );
}
