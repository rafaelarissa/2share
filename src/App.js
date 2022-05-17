import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddPlaylist from "./pages/AddPlaylist";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-playlist" element={<AddPlaylist />} />
      </Routes>
    </BrowserRouter>
  );
}
