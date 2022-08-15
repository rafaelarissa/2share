import api from "./api";
import authData from "./users";

export async function createPlaylist(token, data) {
  const config = authData(token);
  const response = await api.post("/playlists", data, config);
  return response.data;
}

export async function listPlaylists(token) {
  const config = authData(token);
  const response = await api.get("/playlists", config);
  return response.data;
}

export async function getSinglePlaylist(token, id) {
  const config = authData(token);
  const response = await api.get(`/playlist/${id}`, config);
  return response.data;
}

// export async function addSongToPlaylist(playlistId, trackAPIid) {
//   const response = await api.post(`/playlist/${playlistId}`, trackAPIid);
//   return response.data;
// }
