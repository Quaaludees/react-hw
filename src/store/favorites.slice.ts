import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState, saveState } from './storage';
import { userAction } from './user.slice';

export interface FavoriteMovie {
    id: number | string;
    count?: number;
    poster?: string;
    filmName?: string;
}

export interface FavoriteMovieState {
    movies: FavoriteMovie[];
}

const initialState: FavoriteMovieState = {
    movies: [],
};

type StorageFavorites = {
    userName: string;
    movies: FavoriteMovie[];
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        add: (
            state,
            action: PayloadAction<FavoriteMovie & { userName: string }>
        ) => {
            const { userName, ...movie } = action.payload;
            const data = [...state.movies, movie];
            state.movies = data;
            const storageFav = loadState<StorageFavorites[]>('favorites') ?? [];
            const res = storageFav.find(el => el.userName === userName);
            if (!res) {
                //dobavlen
                saveState<StorageFavorites[]>(
                    [
                        ...storageFav,
                        {
                            movies: data,
                            userName,
                        },
                    ],
                    'favorites'
                );
                return;
            }
            //obnovlen
            saveState<StorageFavorites[]>(
                storageFav.map(el => {
                    if (el.userName === action.payload.userName) {
                        return {
                            ...el,
                            movies: data,
                        };
                    }
                    return el;
                }),
                'favorites'
            );
        },
        delete: (
            state,
            action: PayloadAction<{
                id: FavoriteMovie['id'];
                userName: string;
            }>
        ) => {
            const data = state.movies.filter(el => el.id !== action.payload.id);
            const storageFav = loadState<StorageFavorites[]>('favorites') ?? [];
            state.movies = data;
            saveState<StorageFavorites[]>(
                storageFav.map(el => {
                    if (el.userName === action.payload.userName) {
                        return {
                            ...el,
                            movies: data,
                        };
                    }
                    return el;
                }),
                'favorites'
            );
        },
        initData: (state, action: PayloadAction<string | undefined>) => {
            const storageFav = loadState<StorageFavorites[]>('favorites') ?? [];
            const res = storageFav.find(el => el.userName === action.payload);
            if (res) {
                state.movies = res.movies;
            }
        },
    },
    extraReducers: builder => {
        builder.addCase(userAction.logout, state => {
            state.movies = [];
        });
        builder.addCase(userAction.login, (state, action) => {
            const storageFav = loadState<StorageFavorites[]>('favorites') ?? [];
            const res = storageFav.find(
                el => el.userName === action.payload.userName
            );
            if (res) {
                state.movies = res.movies;
            }
        });
    },
});

export default favoritesSlice.reducer;
export const favoritesMovieAction = favoritesSlice.actions;
