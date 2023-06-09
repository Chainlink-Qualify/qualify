import axios from "axios";
import { getAuthToken } from "../utils/auth";

export const aXios = axios.create({
    baseURL: "https://vetly-backend.onrender.com/api/v1/",
});

