import axios from "axios";

const API_URL = "http://localhost:3939";

const client = axios.create({ baseURL: API_URL });

export const getClients = async () => {
  const { data } = await client.get("/clients");
  return data;
};
