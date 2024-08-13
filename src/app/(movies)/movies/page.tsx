import React from 'react';
import {movies} from "@/services/api.services";
import {IMovie} from "@/models/IMovie";
import MoviePage from "@/app/(movies)/movies/movie/page";


const MoviesPage = async () => {

    const allMovies = await movies.getAllMovies();
    let allMoviesResults: IMovie[] = allMovies.results;

    return (
        <div>
            {
                allMoviesResults.map((movie, index) =>
                    <li key={index}>
                        <MoviePage movie={movie}/>
                    </li>)
            }
        </div>
    );
};

export default MoviesPage;