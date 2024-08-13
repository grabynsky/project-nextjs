import {urls} from "@/constants/urls";
import {token} from "@/constants/token";
import {IMovies} from "@/models/IMovies";



const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+ token,
    }
};

export const movies = {

    getAllMovies: async ():Promise<IMovies> => {
        const allMovies = await fetch(urls.movies, options)
            .then(response => response.json())


        console.log(allMovies)
        return allMovies;
    }
}