import { IMovie } from '../types/types';
import { getFavoritesIds, saveToStorage } from '../helpers/helpers';

export function renderHeartIcon(movie: IMovie): SVGElement {
    const iconSvg = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
    );
    const iconPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    );

    iconSvg.setAttribute('viewBox', '0 -2 18 22');
    iconSvg.setAttribute('stroke', 'red');
    iconSvg.setAttribute('width', '50');
    iconSvg.setAttribute('height', '50');
    iconSvg.id = `${movie.id}`;
    iconSvg.classList.add('bi', 'bi-heart-fill', 'position-absolute', 'p');
    getFavoritesIds().includes(movie.id)
        ? (iconSvg.style.fill = 'red')
        : (iconSvg.style.fill = '#ff000078');

    iconPath.setAttribute(
        'd',
        'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
    );
    iconPath.setAttribute('fill-rule', 'evenodd');

    iconSvg.addEventListener('click', () => {
        const movieIds = getFavoritesIds();
        const isFavorite = movieIds.includes(movie.id);

        if (!isFavorite) {
            iconSvg.style.fill = 'red';
            movieIds.push(movie.id);

            saveToStorage(movieIds);
        } else {
            iconSvg.style.fill = '#ff000078';
            const filteredMovieIds = movieIds.filter(
                (movieId) => movieId != movie.id
            );

            saveToStorage(filteredMovieIds);
        }
    });

    iconSvg.appendChild(iconPath);

    return iconSvg;
}
