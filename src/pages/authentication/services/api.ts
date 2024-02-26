import { apiGetRequest } from "../../../utils/api/get";
import { apiPostRequest } from "../../../utils/api/post";
import { SignInRequestDto, SignInResponseDto, SignUpRequestDto, VerfiyAccountRequestDto, VerfiyAccountResponseDto } from "../model/auth";



const API_URL = process.env.REACT_APP_AUTH_API_URL || "";

console.log('API LINK', API_URL)

//API CALLS
export const signinAPI = (data: SignInRequestDto): Promise<SignInResponseDto> => apiPostRequest({
    reqAuthentication: true,
    apiUrl: 'http://localhost:3000/' + 'auth/signin',
    data: data,
    content_type: 'application/json',
});


export const signupAPI = (data: SignUpRequestDto): Promise<SignInResponseDto> => apiPostRequest({
    reqAuthentication: true,
    apiUrl: 'http://localhost:3000/' + 'auth/signup',
    data: data,
    content_type: 'application/json',
});

export const forgotpasswordAPI = (data: VerfiyAccountRequestDto): Promise<VerfiyAccountResponseDto> => apiPostRequest({
    reqAuthentication: true,
    apiUrl: 'http://localhost:3000/' + 'auth/forgotPassword',
    data: data,
    content_type: 'application/json',
});

