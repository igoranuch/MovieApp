import { getRandomFilm } from '../helpers/helpers';
import { IMovie, movieType } from '../types/types';
import { renderHeartIcon } from './heartIcon';

export function renderMovie(movie: IMovie, type: movieType): HTMLDivElement {
    const movieContainer = document.createElement('div');
    const movieCard = document.createElement('div');
    const image = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardText = document.createElement('p');
    const dateContainer = document.createElement('div');
    const releaseDate = document.createElement('small');
    const iconSvg = renderHeartIcon(movie);

    type == 'favorite'
        ? movieContainer.classList.add('col-12', 'p-2')
        : movieContainer.classList.add('col-lg-3', 'col-md-4', 'col-12', 'p-2');
    movieCard.classList.add('card', 'shadow-sm');
    cardBody.classList.add('card-body');
    cardText.classList.add('card-text', 'truncate');
    dateContainer.classList.add(
        'd-flex',
        'justify-content-between',
        'align-items-center'
    );
    releaseDate.classList.add('text-muted');

    movie.posterPath != null
        ? (image.src = `https://image.tmdb.org/t/p/original/${movie.posterPath}`)
        : (image.src = './images/notfound.jpg');

    cardText.textContent = movie.overview;
    releaseDate.textContent = movie.releaseDate;
    movieContainer.appendChild(movieCard);
    movieCard.appendChild(image);
    movieCard.appendChild(iconSvg);
    cardBody.appendChild(cardText);
    movieCard.appendChild(cardBody);
    dateContainer.appendChild(releaseDate);
    cardBody.appendChild(dateContainer);

    return movieContainer;
}

export function renderMovies(
    moviesContainer: HTMLDivElement,
    movies: IMovie[],
    type: movieType
): void {
    movies.map((movie: IMovie) => {
        const movieCard = renderMovie(movie, type);
        moviesContainer.appendChild(movieCard);
        return movieCard;
    });
}

export function renderRandomMovie(movies: IMovie[]): void {
    const randomMovie = getRandomFilm(movies);

    const randomMovieName = <HTMLElement>(
        document.querySelector('#random-movie-name')
    );
    const randomMovieDescription = <HTMLElement>(
        document.querySelector('#random-movie-description')
    );
    const randomMovieBackground = <HTMLElement>(
        document.querySelector('#random-movie')
    );

    randomMovieName.textContent = randomMovie.originalTitle;
    randomMovieDescription.textContent = randomMovie.overview;
    randomMovie.backdropPath
        ? (randomMovieBackground.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${randomMovie.backdropPath})`)
        : (randomMovieBackground.style.backgroundImage = `url(./images/notfoundBanner.jpg)`);
    randomMovieBackground.style.backgroundSize = 'cover';
}
