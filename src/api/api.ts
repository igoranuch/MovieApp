import { api_key } from '../common/common';
import { normalize } from '../helpers/helpers';
import { IMovie, movieQuery } from '../types/types';

export async function searchMovies(inputValue: string) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${inputValue}&page=1`
        );

        return response.json();
    } catch (error) {
        throw error;
    }
}

export async function getMovies(query: movieQuery) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${query}?api_key=${api_key}&language=en-US&page=1`
        );

        return response.json();
    } catch (error) {
        throw error;
    }
}

export async function getMovieById(id: number) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
        );
        return response.json();
    } catch (error) {
        throw error;
    }
}

export async function getFavoriteMovies(movieIds: number[]) {
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
