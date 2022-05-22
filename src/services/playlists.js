import api from "./api";

export async function create(data) {
  const response = await api.post("/playlists", data);
  return response.data;
}

export async function list() {
  const response = await api.get("/playlists");
  return response.data;
}
