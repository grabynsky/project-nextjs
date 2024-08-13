import React from 'react';
import styles from "./genres.module.css"
import {genres} from "@/services/api.services";
import Link from "next/link";

const GenresPage = async () => {
    const allGetGenre = await genres.getAllGenre();


    return (
        <div className={styles.genres}>

            {
                allGetGenre.map(
                    (genre, index) =>
                        <Link
                            key={index}
                            href={genre.name}
                            className={styles.genreLink}
                        >
                           <Link
                               href={'/genres/'+ genre.id}
                               className={styles.genreLinkLink}
                           >
                               {genre.name}
                           </Link>
                        </Link>)
            }
        </div>
    );
};

export default GenresPage;