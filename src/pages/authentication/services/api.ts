import { apiGetRequest } from "../../../utils/api/get";
import { apiPostRequest } from "../../../utils/api/post";
import { SignInRequestDto, SignInResponseDto, SignUpRequestDto, VerfiyAccountRequestDto, VerfiyAccountResponseDto } from "../model/auth";



const API_URL = process.env.EXPO_PUBLIC_AUTH_API_URL || "";

console.log('API LINK', API_URL)

//API CALLS
export const signinAPI = (data: SignInRequestDto): Promise<SignInResponseDto> => apiPostRequest({
    reqAuthentication: true,
    apiUrl: 'https://beadvocates.onrender.com/' + 'auth/signin',
    data: data,
    content_type: 'application/json',
});


export const signupAPI = (data: SignUpRequestDto): Promise<SignInResponseDto> => apiPostRequest({
    reqAuthentication: true,
    apiUrl: API_URL + 'auth/signup',
    data: data,
    content_type: 'application/json',
});

export const forgotpasswordAPI = (data: VerfiyAccountRequestDto): Promise<VerfiyAccountResponseDto> => apiPostRequest({
    reqAuthentication: true,
    apiUrl: API_URL + 'auth/forgotPassword',
    data: data,
    content_type: 'application/json',
});

