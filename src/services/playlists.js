import api from "./api";

export async function createPlaylist(data) {
  const response = await api.post("/playlists", data);
  return response.data;
}

export async function listPlaylists() {
  const response = await api.get("/playlists");
  return response.data;
}
