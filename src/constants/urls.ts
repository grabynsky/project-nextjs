import {base} from "next/dist/build/webpack/config/blocks/base";

const baseURL = 'https://api.themoviedb.org/3';
const movies = '/discover/movie';
const genre = '/genre/movie/list';
const poster = 'https://image.tmdb.org/t/p/w500';
const search = '/search/movie';
const characters = '/movie';

export const urls = {
    movies: baseURL + movies,
    genre: baseURL + genre,
    poster,
    characters: baseURL+characters
}