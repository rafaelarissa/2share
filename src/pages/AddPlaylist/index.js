import { Button, Divider, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MiniDrawer from "../../components/SideBar";
import { Container, Input, TitleScreen } from "./style";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  width: "100vw",
  maxWidth: "800px",
  height: "80vh",

  margin: "0 auto",
  border: "2px solid #201f1f",

  gap: "20px",
};

export default function AddPlaylist() {
  return (
    <Container>
      <MiniDrawer />
      <Box sx={styles} component="form">
        <Typography sx={styles.title} variant="h4" component="h1">
          <TitleScreen>Nova Playlist</TitleScreen>
        </Typography>
        <Paper elevation={3} />
        <Input placeholder="Título da Playlist" />
        <Input placeholder="Ícone" />
        <Input className="descricao" placeholder="Descrição" />
        <Button
          sx={{
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
          }}
          variant="contained"
          type="submit"
        >
          Enviar
        </Button>
      </Box>
    </Container>
  );
}
