import {IGenre} from "@/models/IGenre";

export interface IMovie {
    adult: boolean,
    backdrop_path: string,
    budget:number,
    genres: IGenre[],
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}