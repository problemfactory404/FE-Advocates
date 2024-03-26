export type  createClientDto= {
    user_id: number;
    case_id: number;
    first_name: string;
    last_name: string;
    mobile: string;
    email: string;
    role: string;
    address: string;
    identity_no: string;
    vehicle_no: string;
    updated_by: number;
}



export type UserData ={
    user_id: number;
    case_id: number;
    first_name: string;
    last_name: string;
    mobile: string;
    email: string;
    role: string; // Assuming role can only be 'Admin' or 'User', adjust as needed
    address: string;
    identity_no: string;
    vehicle_no: string;
    updated_by: number;
    id: number;
    created_at: string;
    updated_at: string;
}

export type createClientResponseDto = {
    code: number;
    status: string;
    message: string;
    data: UserData;
}
