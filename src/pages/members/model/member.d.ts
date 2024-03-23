export type User = {
    id: number;
    first_name: string;
    last_name: string;
    phoneNumber: string;
    email: string;
    role: string;
    address: string;
    identity_no: string;
    vehicle_no: string;
    created_at: string;
    update_at: string;
    updated_by: number;
    isLoggedIn: boolean;
    password: string;
    status: string;
}

export type UserData = {
    users: User[];
    page: string;
    pageSize: string;
    totalRecords: number;
    totalPages: number;
}

export type UserListResponse = {
    code: number;
    status: string;
    message: string;
    data: UserData;
}

export type CreateMemberDto = {
    first_name: string;
    last_name: string;
    email: string
    phoneNumber: string
    password: string
    role: string;
    address: string;
    identity_no: string;
    vehicle_no: string;
}

export type UpdateMemberDto = {
    first_name: string;
    last_name: string;
    email: string
    phoneNumber: string;
    role: string;
    address: string;
    identity_no: string;
    vehicle_no: string;
}

export type UpdateMemberResponse ={
    code: number;
    status: string;
    message: string;
    data: {
        generatedMaps: any[]; // You might want to specify the type of generatedMaps
        raw: any[]; // You might want to specify the type of raw
        affected: number;
    };
}

export type CreateMemeberResponseData = {
    first_name: string;
    last_name: string;
    phoneNumber: string;
    email: string;
    role: string;
    address: string;
    identity_no: string;
    vehicle_no: string;
    password: string;
    id: number;
    created_at: string;
    update_at: string;
    updated_by: number;
    isLoggedIn: boolean;
    status: string;
}