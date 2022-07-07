export interface IMovie {
    id: number;
    originalTitle: string;
    overview: string;
    posterPath: string | null;
    releaseDate: string;
    backdropPath: string | null;
}

export type movieQuery = {
    state: 'popular' | 'upcoming' | 'top_rated' | 'search';
    page: number;
};

export type movieType = 'favorite' | 'default';
