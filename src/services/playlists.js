import api from "./api";

export async function createPlaylist(data) {
  const response = await api.post("/playlists", data);
  return response.data;
}

export async function listPlaylists() {
  const response = await api.get("/playlists");
  return response.data;
}

export async function getSinglePlaylist(id) {
  const response = await api.get(`/playlist/${id}`);
  return response.data;
}

export async function addSongToPlaylist(playlistId, trackAPIid) {
  const response = await api.post(`/playlist/${playlistId}`, trackAPIid);
  return response.data;
}
