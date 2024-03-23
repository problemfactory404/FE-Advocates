import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignInResponseDto, SignUpResponseDto, VerfiyAccountResponseDto } from "../model/auth";

type InitialData = {
    signIn: SignInResponseDto | any,
    signUp: SignInResponseDto | any,
    forgotPassword: VerfiyAccountResponseDto | any,
    token: string | any,
    toggleValue: number
};
const initialState: InitialData = {
    signIn: null,
    signUp: null,
    forgotPassword: null,
    toggleValue: 0,
    token: ""
};
const slice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        signinSuccess: (
            state,
            action: PayloadAction<Object>
        ) => {
            state.signIn = action.payload;
        },

        signinFailed: (
            state,
            action: PayloadAction<any>
        ) => {
            state.signIn = Array.isArray(action.payload.errors) && action.payload.errors[0].length > 0 ? action.payload.errors[0] : 'Something went wrong. Please try again';
        },

        signupSuccess: (
            state,
            action: PayloadAction<Object>
        ) => {
            state.signUp = action.payload;

        },
        signupFailed: (state, action: PayloadAction<any>) => {
            state.signUp = Array.isArray(action.payload.errors) && action.payload.errors[0].length > 0 ? action.payload.errors[0] : 'Something went wrong. Please try again';

        },
        forgetPasswordSuccess: (
            state,
            action: PayloadAction<Object>
        ) => {
            state.forgotPassword = action.payload;

        },
        forgetPasswordFailed: (state, action: PayloadAction<any>) => {
            state.forgotPassword = Array.isArray(action.payload.errors) && action.payload.errors[0].length > 0 ? action.payload.errors[0] : 'Something went wrong. Please try again';

        },
        setToken: (state, action: PayloadAction<any>) => {
            state.token = action.payload;
        },




    }
})
export const authSlice = slice.reducer;
export const {
    signinSuccess,
    signinFailed,
    signupSuccess,
    signupFailed,
    forgetPasswordSuccess,
    forgetPasswordFailed,
    setToken
} = slice.actions;