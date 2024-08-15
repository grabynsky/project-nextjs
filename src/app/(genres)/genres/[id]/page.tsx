import React from 'react';
import {movies} from "@/services/api.services";
import {urls} from "@/constants/urls";
import styles from "./idPage.module.css";
import Link from 'next/link';
import PaginationComponent from '@/components/Pagination/PaginationComponent';


type Params = {
    id: string;
};

const GenreIdPage = async ({params}:{params: Params}) => {

    const genre = await movies.getGenreMovies(params.id, 1);

    const genreMovies = genre.results;


    return (

        <div className={styles.idGenre}>
            <PaginationComponent page={genre.page}/>
            {
                genreMovies.map((genre, index) =>
                    <Link key={index}   href={'/movie/'+ genre.id}>

                        <div className={styles.divGenre}>
                            <img
                                src={urls.poster + `/${genre.poster_path}`}
                                alt={genre.title}
                                className={styles.img}
                            />
                            <p className={styles.genreParagraph}>{genre.title}</p>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default GenreIdPage;