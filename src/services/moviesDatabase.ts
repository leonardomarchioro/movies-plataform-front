import axios from "axios";

export const tmdaService = axios.create({
    baseURL: import.meta.env.VITE_TMDA_URL,
    params: {
        "api_key": import.meta.env.VITE_TMDA_SECRET_KEY,
        language: "pt-BR"
    }
})

export const getSearchMovie = async (query: string, page: number = 1) => {
    return tmdaService.get(`/search/movie`, {
        params: {
            query,
            page
        }
    }).then(({ data }) => data).catch(err => console.log(err))
}

export const getAllMovie = async (page: number = 1) => {
    return tmdaService.get(`/discover/movie`, {
        params: {
            page
        }
    }).then(({ data }) => data).catch(err => console.log(err))
}

export const getPopularMovies =  async () => {
    return tmdaService.get(`/movie/popular`).then(({ data }) => data).catch(err => console.log(err))
}