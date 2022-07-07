import { IMovie, movieQuery } from './types/types';
import { getMovies, getMovieById, searchMovies } from './api/api';
import { renderMovies, renderRandomMovie } from './components/movieCards';
import { movieMapper, saveToStorage, getFavoritesIds } from './helpers/helpers';
import { paginate } from './types/types';

const searchButton = <HTMLButtonElement>document.querySelector('#submit');
const popularButton = <HTMLButtonElement>document.querySelector('#popular');
const topRatedButton = <HTMLButtonElement>document.querySelector('#top_rated');
const upcomingButton = <HTMLButtonElement>document.querySelector('#upcoming');
const loadMoreButton = <HTMLButtonElement>document.querySelector('#load-more');
const favoritesButton = <HTMLButtonElement>(
    document.querySelector('.navbar-toggler')
);
const filmContainer = <HTMLDivElement>document.querySelector('#film-container');
const favoriteMovies = <HTMLDivElement>(
    document.querySelector('#favorite-movies')
);
const input = <HTMLInputElement>document.querySelector('#search');

export async function render() {
    window.onload = seeder;

    searchButton.addEventListener('click', () => {
        if (input.value.trim() != '') mountMovies('search');
    });

    popularButton.addEventListener('click', () => {
        mountMovies('popular');
    });

    topRatedButton.addEventListener('click', () => {
        mountMovies('top_rated');
    });

    upcomingButton.addEventListener('click', () => {
        mountMovies('upcoming');
    });

    loadMoreButton.addEventListener('click', () => {});

    favoritesButton.addEventListener('click', () => {});
}

async function seeder() {
    const movies = movieMapper(await getMovies('popular'));
    renderRandomMovie(movies);
    renderMovies(filmContainer, movies);
}

async function mountMovies(query: movieQuery) {
    let rawMovies;

    if (query == 'search') {
        rawMovies = await searchMovies(input.value);
    } else {
        rawMovies = await getMovies(query);
    }

    const movies = movieMapper(rawMovies);
    renderMovies(filmContainer, movies);
}

async function mountFavorites(movieIds: []) {}
