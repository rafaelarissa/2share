import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddPlaylist from "./pages/AddPlaylist";
import Home from "./pages/Home";

export default function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-playlist" element={<AddPlaylist />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
