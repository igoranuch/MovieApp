import { getRandomFilm } from '../helpers/helpers';
import { IMovie } from '../types/types';

export function renderMovie(movie: IMovie) {
    const movieContainer = document.createElement('div');
    const movieCard = document.createElement('div');
    const image = document.createElement('img');
    const iconSvg = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
    );
    const iconPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    );
    const cardBody = document.createElement('div');
    const cardText = document.createElement('p');
    const dateContainer = document.createElement('div');
    const releaseDate = document.createElement('small');
    iconSvg.setAttribute('fill', '#ff000078');
    iconSvg.setAttribute('viewBox', '0 -2 18 22');
    iconSvg.setAttribute('stroke', 'red');
    iconSvg.setAttribute('width', '50');
    iconSvg.setAttribute('height', '50');
    iconPath.setAttribute(
        'd',
        'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
    );
    iconPath.setAttribute('fill-rule', 'evenodd');
    movieContainer.classList.add('col-lg-3', 'col-md-4', 'col-12', 'p-2');
    movieCard.classList.add('card', 'shadow-sm');
    iconSvg.classList.add('bi', 'bi-heart-fill', 'position-absolute', 'p');
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
    iconSvg.appendChild(iconPath);
    movieCard.appendChild(iconSvg);
    cardBody.appendChild(cardText);
    movieCard.appendChild(cardBody);
    dateContainer.appendChild(releaseDate);
    cardBody.appendChild(dateContainer);

    return movieContainer;
}

export function renderMovies(
    moviesContainer: HTMLDivElement,
    movies: IMovie[]
): void {
    moviesContainer.innerHTML = '';
    movies.map((movie: IMovie) => {
        const movieCard = renderMovie(movie);
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
    randomMovieBackground.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${randomMovie.posterPath})`;
    randomMovieBackground.style.backgroundSize = 'cover';
}
