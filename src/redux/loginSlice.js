import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isAuth: false,
    error: '',
    access_token: {}
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginProcess: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, payload ) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = '';
            state.access_token = payload;
        },
        loginFail: (state, payload ) => {
            state.isLoading = false;
            state.error = payload;
        }
    }
});

const { reducer, actions } = loginSlice;

export const { loginProcess, loginSuccess, loginFail } = actions;

export default reducer;