import api from "./api";

export async function signUp(data) {
  const response = await api.post("/sign-up", data);
  return response.data;
}
