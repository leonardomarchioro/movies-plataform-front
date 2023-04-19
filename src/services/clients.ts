import axios from "axios";

export const tmdbService = axios.create({
    baseURL: import.meta.env.VITE_TMDA_URL,
    params: {
        "api_key": import.meta.env.VITE_TMDA_SECRET_KEY,
        language: "pt-BR"
    }
})

export const moviesService = axios.create({
    baseURL: import.meta.env.VITE_MOVIES_URL,
    headers: {
        "Content-Type": "application/json"
    }
})