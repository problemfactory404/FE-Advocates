import { AppThunk } from "../../../store/store"
import { createClientDto, createClientResponseDto } from "../models/clients";
import { addClientAPI} from "./api";

import { addClientFailed, addClientSuccess } from "./slice";

// export const getMembersList = (token: string): AppThunk => async (dispatch) => {
//     try {
//         const ApisData: UserListResponse = await fetchUserAPI(token);
//         dispatch(setMembersList(ApisData));
//     } catch (err) {
//         dispatch(setMembersList([]));
//     }
// }

// export const deleteMember = (id: string): AppThunk => async (dispatch) => {
//     try {
//         const ApisData: any = await deletUserAPI(id);
//         dispatch(setDeleteStatus(ApisData));
//     } catch (err) {
//         dispatch(setDeleteStatus('failed'));
//     }
// }


export const addClientFunction = (Data: createClientDto): AppThunk => async (dispatch) => {
    try {
        const ApisData: createClientResponseDto = await addClientAPI(Data);
        dispatch(addClientSuccess(ApisData));
    } catch (err) {
        dispatch(addClientFailed(err));
    }
}

// export const updateMemberFunction = (Data: UpdateMemberDto,id:string): AppThunk => async (dispatch) => {
//     try {
//         const ApisData: UpdateMemberResponse = await updateUserAPI(Data,id);
//         console.log('######', ApisData)
//         dispatch(updateMemberSuccess(ApisData));
//     } catch (err) {
//         dispatch(updateMemberFailed(err));
//     }
// }