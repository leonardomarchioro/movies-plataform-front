import { moviesService } from "./clients";

export const rentMovie = async (id: number, token: string) => {
  const data = { ids: [id] };

  try {
    const { data: result } = await moviesService.post(`/movies`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return result;
  } catch (err) {
    return { error: true, err };
  }
};

export const findRentedMovies = async (token: string) => {
  try {
    const { data: result } = await moviesService.get(`/movies`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return result;
  } catch (err) {
    return { error: true, err };
  }
};
