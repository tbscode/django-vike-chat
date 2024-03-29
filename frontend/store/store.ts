import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice, configureStore, combineReducers } = toolkitRaw.default ?? toolkitRaw;
import { chatsSlice, ChatState, fetchChats } from './chats';
import { Dispatch } from 'redux';
import Cookies from "js-cookie";
import { messagesSlice, MessagesState } from './messages';
import { UserState, fetchUser, userSlice } from './user';
import { fetchProfile, profileSlice, ProfileState } from './profile';
import { Api } from '@/_api/api';
import { toast } from 'sonner';
import { navigate } from '@/components/atoms/Link';

const frontendSlice = createSlice({
    name: 'frontend',
    initialState: null,
    reducers: {
        fetchFrontend: (state, action) => {
            state = action.payload;
        },
        changeTheme: (state, action) => {
            state.theme = action.payload;
        }
    },
});

const pagePropsSlice = createSlice({
    name: 'pageProps',
    initialState: {},
    reducers: {
        fetchPageProps: (state, action) => {
            state = action.payload;
        },
    },
});

export const { fetchFrontend, changeTheme } = frontendSlice.actions;
export const { fetchPageProps } = pagePropsSlice.actions;

const rootReducer = combineReducers({
    user: userSlice.reducer,
    frontend: frontendSlice.reducer,
    pageProps: pagePropsSlice.reducer,
    chats: chatsSlice.reducer,
    messages: messagesSlice.reducer,
    profile: profileSlice.reducer,
})

export function getStore(initalReduxState) {
    return configureStore({
        preloadedState: initalReduxState,
        reducer: rootReducer
    });
}

export const logoutUser = (
    api: typeof Api.prototype.api
) => async (
    dispatch: Dispatch
) => {
        try {
            await api.logoutRetrieve();
            dispatch(fetchUser(null));
            dispatch(fetchChats(null));
            dispatch(fetchProfile(null));
            // Just be be sure - Is normally auto removed by the 'Set-Cookie' header
            Cookies.remove("sessionid");
            setTimeout(() => {
                navigate("/");
            }, 100);
        } catch (e) {
            toast.error("Error: " + JSON.stringify(e.error)); // Assuming e has an error property
        }
    };

export type AppDispatch = typeof rootReducer.dispatch;
export interface RootState {
    user: UserState,
    chats: ChatState,
    messages: MessagesState,
    profile: ProfileState,
    pageProps: any,
    frontend: any,
}