import {urls} from "@/constants/urls";
import {token} from "@/constants/token";
import {IMovies} from "@/models/IMovies";
import {IGenre} from "@/models/IGenre";
import {IMovie} from "@/models/IMovie";

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + token,
    }
};

export const movies = {

    getAllMovies: async (): Promise<IMovies> => {
        const allMovies = await fetch(urls.movies, options)
            .then(response => response.json())

        return allMovies;
    },
    getGenreMovies: async (id: string, page: number = 1): Promise<IMovies> => {
        const genreMovies = await fetch(`${urls.movies}?with_genres=${id}&page=${page}`, options)
            .then(response => response.json())
        return genreMovies;
    },
    getMovieById: async (id: string): Promise<IMovie> => {
        const movieId = await fetch(urls.characters + `/${id}`, options)
            .then(response => response.json())
        return movieId;
    }
}

export const genres = {
    getAllGenre: async (): Promise<IGenre[]> => {
        const allGenres = await fetch(urls.genre, options)
            .then(response => response.json())

        return allGenres.genres;
    },


}
