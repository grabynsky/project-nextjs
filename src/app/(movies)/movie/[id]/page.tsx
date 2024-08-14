import React from 'react';
import {movies} from "../../../../services/api.services";
import {urls} from "../../../../constants/urls";
import styles from "./MovieByIdPage.module.css"

type Params = {
    id: string;
}

const MovieByIdPage = async ({params}: { params: Params }) => {

    const getMovieById = await movies.getMovieById(params.id)

    return (
        <main className={styles.main}>
            <div>

                <img src={urls.poster + getMovieById.poster_path} alt={getMovieById.title} />

                <p className={styles.titleMovie}>{getMovieById.title}</p>
            </div>

            <div className={styles.divDescription}>
                <div><b>Genres: </b></div>
                {getMovieById.genres.map(genre => <span key={genre.id}> {genre.name}</span>)}

                <div>
                    <p><b>Budget: </b>$ {getMovieById.budget}</p>
                </div>
            </div>
        </main>
    );
};

export default MovieByIdPage;