import api from "./api";

export async function create() {
  const response = await api.get("/playlists");

  return response.data;
}
