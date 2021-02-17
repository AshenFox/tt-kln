import axios from "axios";

const idDev = process.env.NODE_ENV === "development";

const CustomAxios = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: idDev ? "http://localhost:3004/" : false,
});

export default CustomAxios;
