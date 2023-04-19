import { tmdbService } from "./clients"

export const getSearchMovie = async (query: string, page: number = 1) => {
    try {
        const { data: result } = await tmdbService.get(`/search/movie`, {
            params: {
                query,
                page
            }
        })
        return result

    } catch (err) {
        console.log(err)
        return {error: true, err}
    }
}

export const getAllMovie = async (page: number = 1) => {
    try {
        const { data: result } = await tmdbService.get(`/discover/movie`, {
            params: {
                page
            }
        })
        return result
        
    } catch (err) {
        console.log(err)
        return {error: true, err}
    }
}

export const getPopularMovies =  async () => {
    try {
        const { data: result } = await tmdbService.get(`/movie/popular`)
        return result
        
    } catch (err) {
        console.log(err)
        return {error: true, err}
    }
}