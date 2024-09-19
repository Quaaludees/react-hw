import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosError, AxiosInstance } from 'axios';
import { useAxiosContext } from '../../provider/AxiosProvider/context';
import { FilmsSearchParams, FilmsSearchResponse } from './useFilmsSearchQuery';

type FilmsPopularParams = Omit<FilmsSearchParams, 'query'>;

const defaultKey = 'POPULAR_FILMS_KEY';
const getQueryKey = (
    params: FilmsPopularParams
): [string, FilmsPopularParams | undefined] => [defaultKey, params];

const getQueryFn =
    (params: FilmsPopularParams, axiosInstance: AxiosInstance) => async () => {
        const { data } = await axiosInstance.get<FilmsSearchResponse>(
            'https://api.themoviedb.org/3/movie/popular',
            { params }
        );

        return data;
    };
export const useFilmsPopularQuery = <QCustomResult = FilmsSearchResponse>(
    params: FilmsPopularParams,
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
