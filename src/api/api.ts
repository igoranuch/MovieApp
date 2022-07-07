import { api_key } from '../common/common';
import { normalize } from '../helpers/helpers';
import { IMovie, movieQuery } from '../types/types';

export async function searchMovies(
    query: movieQuery,
    inputValue: string
): Promise<void> {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${inputValue}&page=${query.page}`
    );

    return response.json();
}

export async function getMovies(query: movieQuery): Promise<void> {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${query.state}?api_key=${api_key}&language=en-US&page=${query.page}`
    );

    return response.json();
}

export async function getMovieById(id: number): Promise<void> {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
    );
    return response.json();
}

export async function getFavoriteMovies(movieIds: number[]): Promise<IMovie[]> {
    const favoriteMovies: IMovie[] = [];

    await Promise.all(
        movieIds.map(async (movieId) => {
            const movie = await getMovieById(movieId);
            const normalizedMovie = normalize(movie);
            favoriteMovies.push(normalizedMovie);
        })
    );

    return favoriteMovies;
}
