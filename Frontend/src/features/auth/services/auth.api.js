import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true
});

//LOGIN
export async function login(username, email) {
  const response = await api.post("/login", {
    username,
    password,
  });

  return response.data;
}

//REGISTER
export async function register(username, email, password) {
  const response = await api.post("/register", {
    username,
    email,
    password,
  });

  return response.data;
}

//GET-ME
export async function getme(username, email, password) {
  const response = await api.get("/get-me")

  return response.data;
}


