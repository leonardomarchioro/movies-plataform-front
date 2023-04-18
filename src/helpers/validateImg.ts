import PosterDefault from "../assets/default-movie.png"
import BackdropDefault from "../assets/placeholder-263.png"

export const validateImg = async (path: string, poster: boolean = true) => {
    try {
        const res = await fetch(path)
        if(res.status === 200){
            return path
        }
        return poster ? PosterDefault : BackdropDefault
    } catch (error) {
        return poster ? PosterDefault : BackdropDefault
    }
}