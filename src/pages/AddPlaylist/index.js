import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container, Input, TitleScreen } from "./style";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  width: "100vw",
  maxWidth: "800px",
  height: "100vh",

  paddingTop: "55px",
  margin: "0 auto",

  gap: "20px",
  bgcolor: "#121212",
};

export default function AddPlaylist() {
  return (
    <Container>
      <Box sx={styles} component="form">
        <Typography sx={styles.title} variant="h4" component="h1">
          <TitleScreen>Nova Playlist</TitleScreen>
        </Typography>
        <Paper elevation={3} />
        <Input placeholder="Título da Playlist" />
        <Input placeholder="Ícone" />
        <Input className="descricao" placeholder="Descrição" />
      </Box>
    </Container>
  );
}
