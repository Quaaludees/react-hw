import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosError, AxiosInstance } from 'axios';
import { useAxiosContext } from '../../provider/AxiosProvider/context';

type FilmByIdParams = {
    language?: string;
    movie_id: string;
};

type FilmByIdResponse = IFilmDetails;

export interface IFilmDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: BelongsToCollection;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface BelongsToCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

const defaultKey = 'FILM_BY_ID_KEY';
const getQueryKey = (
    params: FilmByIdParams
): [string, FilmByIdParams | undefined] => [defaultKey, params];

const getQueryFn =
    ({ language, movie_id }: FilmByIdParams, axiosInstance: AxiosInstance) =>
    async () => {
        const { data } = await axiosInstance.get<FilmByIdResponse>(
            `https://api.themoviedb.org/3/movie/${movie_id}`,
            { params: { language } }
        );

        return data;
    };
export const useFilmByIdQuery = <QCustomResult = FilmByIdResponse>(
    params: FilmByIdParams,
    config?: Omit<
        UseQueryOptions<FilmByIdResponse, AxiosError, QCustomResult>,
        'queryKey' | 'queryFn'
    >
) =>
    useQuery<FilmByIdResponse, AxiosError, QCustomResult>({
        queryKey: getQueryKey(params),
        queryFn: getQueryFn(params, useAxiosContext().axiosInstance),
        ...(config ||
            ({} as UseQueryOptions<FilmByIdResponse, AxiosError, any>)),
    } as UseQueryOptions<FilmByIdResponse, AxiosError, any>);
