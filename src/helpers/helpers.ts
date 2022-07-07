import { IMovie } from '../types/types';

export function normalize(element: any): IMovie {
    const movie: IMovie = {
        id: element.id,
        posterPath: element.poster_path,
        overview: element.overview,
        originalTitle: element.original_title,
        releaseDate: element.release_date,
    };

    return movie;
}

export function movieMapper(response: any): IMovie[] {
    return response.results.map((movie: any) => normalize(movie));
}

export function getRandomFilm(movies: IMovie[]) {
    return movies[Math.floor(Math.random() * movies.length)];
}
