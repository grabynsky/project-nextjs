import React from 'react';
import {movies} from "@/services/api.services";
import {urls} from "@/constants/urls";
import styles from "./idPage.module.css";


type Params = { id: string };
const GenreIdPage = async ({params}: { params: Params }) => {

    const genre = await movies.getGenreMovies(params.id);


    const genreMovies = genre.results;
    console.log(genreMovies)


    return (

        <div className={styles.idGenre}>
            {
                genreMovies.map((genre, index) =>
                    <div className={styles.divGenre} key={index}>
                        <img
                            src={urls.poster + `/${genre.poster_path}`}
                            alt={genre.title}
                            className={styles.img}
                        />
                        <p className={styles.genreParagraph}>{genre.title}</p>


                    </div>)

            }
        </div>
    );
};

export default GenreIdPage;