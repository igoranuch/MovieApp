import { movieQuery } from './types/types';
import {
    searchButton,
    moviesContainer,
    popularButton,
    topRatedButton,
    upcomingButton,
    favoritesButton,
    favoriteMoviesContainer,
    loadMoreButton,
    searchInput,
} from './common/common';
import { seeder, mountMovies, mountFavorites } from './services/services';

export async function render(): Promise<void> {
    let paginate: movieQuery = {
        state: 'popular',
        page: 1,
    };

    window.onload = () => seeder(paginate);

    searchButton.addEventListener('click', () => {
        if (searchInput.value.trim() != '') {
            moviesContainer.innerHTML = '';

            paginate = {
                state: 'search',
                page: 1,
            };

            mountMovies(paginate);
        }
    });

    popularButton.addEventListener('click', () => {
        moviesContainer.innerHTML = '';

        paginate = {
            state: 'popular',
            page: 1,
        };

        mountMovies(paginate);
    });

    topRatedButton.addEventListener('click', () => {
        moviesContainer.innerHTML = '';

        paginate = {
            state: 'top_rated',
            page: 1,
        };

        mountMovies(paginate);
    });

    upcomingButton.addEventListener('click', () => {
        moviesContainer.innerHTML = '';

        paginate = {
            state: 'upcoming',
            page: 1,
        };

        mountMovies(paginate);
    });

    favoritesButton.addEventListener('click', () => {
        favoriteMoviesContainer.innerHTML = '';
        mountFavorites();
    });

    loadMoreButton.addEventListener('click', () => {
        if (paginate.state == 'popular') {
            paginate = {
                state: paginate.state,
                page: paginate.page + 1,
            };

            mountMovies(paginate);
        }

        if (paginate.state == 'upcoming') {
            paginate = {
                state: paginate.state,
                page: paginate.page + 1,
            };

            mountMovies(paginate);
        }

        if (paginate.state == 'top_rated') {
            paginate = {
                state: paginate.state,
                page: paginate.page + 1,
            };

            mountMovies(paginate);
        }

        if (paginate.state == 'search') {
            paginate = {
                state: paginate.state,
                page: paginate.page + 1,
            };

            mountMovies(paginate);
        }
    });
}
