export {
    api_key,
    searchButton,
    popularButton,
    topRatedButton,
    upcomingButton,
    loadMoreButton,
    favoritesButton,
    favoriteMoviesContainer,
    moviesContainer,
    searchInput,
};

const api_key = 'c7dd572da5d985ee3a642c60c0cc6820';
const searchButton = <HTMLButtonElement>document.querySelector('#submit');
const popularButton = <HTMLButtonElement>document.querySelector('#popular');
const topRatedButton = <HTMLButtonElement>document.querySelector('#top_rated');
const upcomingButton = <HTMLButtonElement>document.querySelector('#upcoming');
const loadMoreButton = <HTMLButtonElement>document.querySelector('#load-more');
const favoritesButton = <HTMLButtonElement>(
    document.querySelector('.navbar-toggler')
);
const moviesContainer = <HTMLDivElement>(
    document.querySelector('#film-container')
);
const favoriteMoviesContainer = <HTMLDivElement>(
    document.querySelector('#favorite-movies')
);
const searchInput = <HTMLInputElement>document.querySelector('#search');
