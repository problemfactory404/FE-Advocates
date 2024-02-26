import { AppThunk } from "../../../store/store";
import {
    signinSuccess,
    signinFailed,
    signupSuccess,
    signupFailed,
    forgetPasswordSuccess,
    forgetPasswordFailed
} from "./slice";
import { signinAPI, signupAPI, forgotpasswordAPI } from "./api";
import { SignInRequestDto, SignInResponseDto, SignUpRequestDto, VerfiyAccountRequestDto, VerfiyAccountResponseDto, VerifyOtpResponseDto } from "../model/auth";

export const getSignin = (Data: SignInRequestDto): AppThunk => async (dispatch) => {
    try {
        const ApisData: SignInResponseDto = await signinAPI(Data);
        dispatch(signinSuccess(ApisData));
    } catch (err) {
        dispatch(signinFailed(err));
    }
}


export const signUpFunction = (Data: SignUpRequestDto): AppThunk => async (dispatch) => {
    try {
        const ApisData: SignInResponseDto = await signupAPI(Data);
        dispatch(signupSuccess(ApisData));
    } catch (err) {
        dispatch(signupFailed(err));
    }
}

export const forgetPasswordFunction = (Data: VerfiyAccountRequestDto): AppThunk => async (dispatch) => {
    try {
        const ApisData: VerfiyAccountResponseDto = await forgotpasswordAPI(Data);
        dispatch(forgetPasswordSuccess(ApisData));
    } catch (err) {
        dispatch(forgetPasswordFailed(err));
    }
}