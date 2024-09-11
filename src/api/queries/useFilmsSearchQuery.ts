import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosError, AxiosInstance } from 'axios';
import { useAxiosContext } from '../../provider/AxiosProvider/context';

export type FilmsSearchParams = {
    query: string;
    language?: string;
    page?: number;
};

export type FilmsSearchResponse = {
    page: number;
    results: IFilm[];
    total_pages: number;
    total_results: number;
};

type IFilm = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

const defaultKey = 'SEARCH_FILMS_KEY';
const getQueryKey = (
    params: FilmsSearchParams
): [string, FilmsSearchParams | undefined] => [defaultKey, params];

const getQueryFn =
    (params: FilmsSearchParams, axiosInstance: AxiosInstance) => async () => {
        const { data } = await axiosInstance.get<FilmsSearchResponse>(
            'https://api.themoviedb.org/3/search/movie',
            { params }
        );

        return data;
    };
export const useFilmsSearchQuery = <QCustomResult = FilmsSearchResponse>(
    params: FilmsSearchParams,
    config?: Omit<
        UseQueryOptions<FilmsSearchResponse, AxiosError, QCustomResult>,
        'queryKey' | 'queryFn'
    >
) =>
    useQuery<FilmsSearchResponse, AxiosError, QCustomResult>({
        queryKey: getQueryKey(params),
        queryFn: getQueryFn(params, useAxiosContext().axiosInstance),
        ...(config ||
            ({} as UseQueryOptions<FilmsSearchResponse, AxiosError, any>)),
    } as UseQueryOptions<FilmsSearchResponse, AxiosError, any>);
