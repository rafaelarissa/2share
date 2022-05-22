import api from "./api";

export async function create() {
  const response = await api.post("/playlists");
  return response.data;
}

export async function list() {
  const response = await api.get("/playlists");
  return response.data;
}
