import { configureStore } from '@reduxjs/toolkit';
import FavoritesSlice from './favorites.slice';
import UserSlice from './user.slice';
import { saveState } from './storage';

export const store = configureStore({
    reducer: {
        favorites: FavoritesSlice,
        user: UserSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => {
    if (store.getState().user.users.length > 0) {
        saveState(store.getState().user.users, 'user');
    }
});

export type AppDispatch = typeof store.dispatch;
