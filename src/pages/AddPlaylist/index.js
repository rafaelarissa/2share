import { FormControl, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { createTheme } from "@material-ui/core/styles";

export default function AddPlaylist() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Outlined secondary" color="secondary" focused />
      <TextField
        label="Filled success"
        variant="filled"
        color="success"
        focused
      />
      <TextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
      />
    </Box>
  );
}
