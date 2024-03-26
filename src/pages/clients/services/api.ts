import { apiDeleteRequest } from "../../../utils/api/delete";
import { apiGetRequest } from "../../../utils/api/get";
import { apiPatchRequest } from "../../../utils/api/patch";
import { apiPostRequest } from "../../../utils/api/post";
import { createClientDto, createClientResponseDto } from "../models/clients";

const API_URL = process.env.EXPO_PUBLIC_AUTH_API_URL || "";


//API CALLS
// export const fetchUserAPI = (token: string): Promise<UserListResponse> => apiGetRequest({
//     reqAuthentication: true,
//     apiUrl: API_URL + 'users?page=0&pageSize=100',
//     token: token,
//     content_type: 'application/json',
// });


// export const deletUserAPI = (id: string): Promise<any> => apiDeleteRequest({
//     reqAuthentication: true,
//     apiUrl: API_URL + `users/${id}`,

// });

export const addClientAPI = (data: createClientDto ): Promise<createClientResponseDto> => apiPostRequest({
    reqAuthentication: true,
    apiUrl: API_URL + `clients`,
    data: data,
    content_type: 'application/json',
});

// export const updateUserAPI = (data: UpdateMemberDto,id:string): Promise<UpdateMemberResponse> => apiPatchRequest({
//     reqAuthentication: true,
//     apiUrl: API_URL + `users/${parseInt(id)}`,
//     data: data,
//     content_type: 'application/json',
// });