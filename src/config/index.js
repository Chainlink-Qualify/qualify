import axios from "axios";
import { getAuthToken } from "../utils/auth";

export const aXios = axios.create({
    baseURL: `https://vetly-backend.onrender.com/api/v1/`,
    headers: {
        "Authorization": `Bearer ${getAuthToken("rqws844132t")}`,
    }
});

