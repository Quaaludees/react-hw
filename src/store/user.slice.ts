import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../provider/user';
import { loadState } from './storage';

export interface UsersState {
    users: IUser[];
    currentUser: IUser | null;
}

const initialState: UsersState = {
    users: loadState<IUser[]>('user') ?? [],
    currentUser: loadState<IUser[]>('user')?.find(el => el.isLogin) ?? null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (
            state,
            action: PayloadAction<{ cb?: () => void; userName: IUser['name'] }>
        ) => {
            const user = state.users.find(
                el => el.name === action.payload.userName
            );
            if (!user) {
                state.users = [
                    ...state.users.map(el => ({
                        ...el,
                        isLogin: false,
                    })),
                    {
                        name: action.payload.userName,
                        isLogin: true,
                    },
                ];
                state.currentUser = {
                    name: action.payload.userName,
                    isLogin: true,
                };
                action.payload.cb?.();
                return;
            }
            state.users = state.users.map(el => {
                if (el.name === action.payload.userName) {
                    return {
                        ...el,
                        isLogin: true,
                    };
                }
                return {
                    ...el,
                    isLogin: false,
                };
            });
            state.currentUser = {
                name: action.payload.userName,
                isLogin: true,
            };
            action.payload.cb?.();
        },
        logout: state => {
            state.users = state.users.map(el => {
                if (el.name === state.currentUser?.name) {
                    return {
                        ...el,
                        isLogin: false,
                    };
                }
                return el;
            });
            state.currentUser = null;
        },
    },
});

export default userSlice.reducer;
export const userAction = userSlice.actions;
