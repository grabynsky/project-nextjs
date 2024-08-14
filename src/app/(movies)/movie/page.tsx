import React from 'react';
import {movies} from "../../../services/api.services";
import {IMovie} from "../../../models/IMovie";
import {urls} from "../../../constants/urls";
import "../../globals.css"
import Link from "next/link";
import PaginationComponent from '../../../components/Pagination/PaginationComponent';
import { IMovies } from '@/models/IMovies';


const MoviesPage = async ({searchParams}:any) => {
    let allMovies:IMovies;
    // const pageNum = JSON.parse(searchParams.data);
    if(searchParams.data === undefined){
        allMovies = await movies.getAllMovies(1)

    } else {
        const pageNum = JSON.parse(searchParams.data);
        allMovies = await movies.getAllMovies(pageNum)
    }
    // const pageNum = JSON.parse(searchParams.data);
    // const allMovies = await movies.getAllMovies(pageNum);
    let allMoviesResults: IMovie[] = allMovies.results;

    return (
        <main>
            <PaginationComponent page={allMovies.page}/>
            <div className='divImage'>
                {
                    allMoviesResults.map(
                        (movie, index) =>

                            <div key={index} className='divMap'>

                                <Link
                                    href={'/movie/' + movie.id}
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

                {/*<Link href={/movie}></Link>*/}

            </div>


            {/*<button>*/}
            {/*    <Link href={{pathname: '/movie?page='+ allMovies.page,*/}
            {/*    query: {data: JSON.stringify(allMovies)}*/}
            {/*    }}*/}

            {/*    >*/}
            {/*        next*/}
            {/*    </Link>*/}

            {/*</button>*/}
        </main>

    );
};

export default MoviesPage;