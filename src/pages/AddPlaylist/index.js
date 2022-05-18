import { Button, TextField, Typography } from "@mui/material";
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
