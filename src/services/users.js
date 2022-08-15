import api from "./api";

export default function authData(token) {
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
}

export async function signUp(data) {
  await api.post("/sign-up", data);
}

export async function signIn(loginData) {
  return await api.post("/sign-in", loginData);
}
