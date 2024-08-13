import React from 'react';
import {movies} from "@/services/api.services";
import {IMovie} from "@/models/IMovie";
import {urls} from "@/constants/urls";
import "../../globals.css"
import Link from "next/link";


const MoviesPage = async () => {

    const allMovies = await movies.getAllMovies();
    let allMoviesResults: IMovie[] = allMovies.results;

    return (
        <div className='divImage'>
            {
                allMoviesResults.map((movie, index) =>
                    <div key={index} className='divMap'>

                        <Link
                            href={'/movies/' + movie.id}
                        >
                            <img
                                src={urls.poster + `/${movie.poster_path}`}
                                alt={movie.title}
                                className='img'
                            />

                            <p className='bottomParagraph'>
                                {movie.title}
                            </p>
                        </Link>

                    </div>)
            }
        </div>
    );
};

export default MoviesPage;