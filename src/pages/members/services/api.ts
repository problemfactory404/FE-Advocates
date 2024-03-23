import { apiDeleteRequest } from "../../../utils/api/delete";
import { apiGetRequest } from "../../../utils/api/get";
import { apiPatchRequest } from "../../../utils/api/patch";
import { apiPostRequest } from "../../../utils/api/post";
import { CreateMemberDto, CreateMemeberResponseData, UpdateMemberDto, UpdateMemberResponse, UserListResponse } from "../model/member";

const API_URL = process.env.EXPO_PUBLIC_AUTH_API_URL || "";


//API CALLS
export const fetchUserAPI = (token: string): Promise<UserListResponse> => apiGetRequest({
    reqAuthentication: true,
    apiUrl: API_URL + 'users?page=0&pageSize=100',
    token: token,
    content_type: 'application/json',
});


export const deletUserAPI = (id: string): Promise<any> => apiDeleteRequest({
    reqAuthentication: true,
    apiUrl: API_URL + `users/${id}`,

});

export const addUserAPI = (data: CreateMemberDto ): Promise<CreateMemeberResponseData> => apiPostRequest({
    reqAuthentication: true,
    apiUrl: API_URL + `users`,
    data: data,
    content_type: 'application/json',
});

export const updateUserAPI = (data: UpdateMemberDto,id:string): Promise<UpdateMemberResponse> => apiPatchRequest({
    reqAuthentication: true,
    apiUrl: API_URL + `users/${parseInt(id)}`,
    data: data,
    content_type: 'application/json',
});