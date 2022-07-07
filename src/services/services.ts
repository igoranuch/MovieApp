import { getMovies, searchMovies, getFavoriteMovies } from '../api/api';
import {
    moviesContainer,
    searchInput,
    favoriteMoviesContainer,
} from '../common/common';
import { renderRandomMovie, renderMovies } from '../components/movieCards';
import { movieMapper, getFavoritesIds } from '../helpers/helpers';
import { movieQuery } from '../types/types';

export async function seeder(paginate: movieQuery) {
    const movies = movieMapper(await getMovies(paginate));
    renderRandomMovie(movies);
    renderMovies(moviesContainer, movies, 'default');
}

export async function mountMovies(paginate: movieQuery) {
    let rawMovies;

    if (paginate.state == 'search') {
        rawMovies = await searchMovies(paginate, searchInput.value);
    } else {
        rawMovies = await getMovies(paginate);
    }

    const movies = movieMapper(rawMovies);
    renderMovies(moviesContainer, movies, 'default');
}

export async function mountFavorites() {
    const favoriteMovies = await getFavoriteMovies(getFavoritesIds());

    renderMovies(favoriteMoviesContainer, favoriteMovies, 'favorite');
}
