import React from 'react';
import {movies} from "@/services/api.services";
import {urls} from "@/constants/urls";

type Params = {
    id: string;
}

const MovieByIdPage = async ({params}: { params: Params }) => {

    const getMovieById = await movies.getMovieById(params.id)

    return (
        <div>
            <div>
                <img
                    src={urls.poster + getMovieById.poster_path}
                    alt={getMovieById.title}
                />

                <p>{getMovieById.title}</p>
            </div>

            <div><span><b>Genres:</b></span> {getMovieById.genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
            </div>

            <div><b>Budget: </b>{getMovieById.budget}</div>
        </div>
    );
};

export default MovieByIdPage;