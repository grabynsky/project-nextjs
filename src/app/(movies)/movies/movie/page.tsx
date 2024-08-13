import {IMovie} from "@/models/IMovie";
import {FC} from "react";

interface IProps{
    movie: IMovie
}

const MoviePage:FC<IProps> = ({movie}) => {
    return (
        <div>
            {movie.id} {movie.overview}
        </div>
    );
};

export default MoviePage;