import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddPlaylist from "./pages/AddPlaylist";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import PlaylistPage from "./pages/Playlist";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Alert from "./components/Alert";
import { AlertProvider } from "./contexts/AlertContext";

export default function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: "circular-font",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: "circular-font";
            src: url("./assets/fonts/Circular/CircularStd-Book.otf") format("opentype");
            unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
          }
        `,
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/new-playlist" element={<AddPlaylist />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/playlist/:id" element={<PlaylistPage />} />
          </Routes>
        </BrowserRouter>
        <Alert />
      </AlertProvider>
    </ThemeProvider>
  );
}
