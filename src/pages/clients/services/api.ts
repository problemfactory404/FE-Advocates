import { apiDeleteRequest } from "../../../utils/api/delete";
import { apiGetRequest } from "../../../utils/api/get";
import { apiPatchRequest } from "../../../utils/api/patch";
import { apiPostRequest } from "../../../utils/api/post";
import { ClientApResponseDTO, createClientDto, createClientResponseDto } from "../models/clients";

const API_URL = process.env.EXPO_PUBLIC_AUTH_API_URL || "";


//API CALLS
export const fetchClientsAPI = (): Promise<ClientApResponseDTO> => apiGetRequest({
    reqAuthentication: true,
    apiUrl: API_URL + 'clients?page=0&pageSize=100',
    content_type: 'application/json',
});


export const deletClientAPI = (id: string): Promise<any> => apiDeleteRequest({
    reqAuthentication: true,
    apiUrl: API_URL + `clients/${id}`,

});

export const addClientAPI = (data: createClientDto ): Promise<createClientResponseDto> => apiPostRequest({
    reqAuthentication: true,
    apiUrl: API_URL + `clients`,
    data: data,
    content_type: 'application/json',
});

export const updateClientAPI = (data: createClientDto, id: string): Promise<any> => apiPatchRequest({
    reqAuthentication: true,
    apiUrl: API_URL + `clients/${parseInt(id)}`,
    data: data,
    content_type: 'application/json',
});