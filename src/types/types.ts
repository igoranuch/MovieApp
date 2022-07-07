export interface IMovie {
    id: number;
    originalTitle: string;
    overview: string;
    posterPath: string;
    releaseDate: string;
}

export type movieQuery = 'popular' | 'upcoming' | 'top_rated' | 'search';
export const paginate = {
    state: '',
    page: 1,
};
