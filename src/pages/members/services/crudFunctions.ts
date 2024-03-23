import { AppThunk } from "../../../store/store"
import { CreateMemberDto, CreateMemeberResponseData, UpdateMemberDto, UpdateMemberResponse, UserListResponse } from "../model/member";
import { addUserAPI, deletUserAPI, fetchUserAPI, updateUserAPI } from "./api";

import { addMemberFailed, addMemberSuccess, setDeleteStatus, setMembersList, updateMemberFailed, updateMemberSuccess } from "./slice";

export const getMembersList = (token: string): AppThunk => async (dispatch) => {
    try {
        const ApisData: UserListResponse = await fetchUserAPI(token);
        dispatch(setMembersList(ApisData));
    } catch (err) {
        dispatch(setMembersList([]));
    }
}

export const deleteMember = (id: string): AppThunk => async (dispatch) => {
    try {
        const ApisData: any = await deletUserAPI(id);
        dispatch(setDeleteStatus(ApisData));
    } catch (err) {
        dispatch(setDeleteStatus('failed'));
    }
}


export const addMemberFunction = (Data: CreateMemberDto): AppThunk => async (dispatch) => {
    try {
        const ApisData: CreateMemeberResponseData = await addUserAPI(Data);
        dispatch(addMemberSuccess(ApisData));
    } catch (err) {
        dispatch(addMemberFailed(err));
    }
}

export const updateMemberFunction = (Data: UpdateMemberDto,id:string): AppThunk => async (dispatch) => {
    try {
        const ApisData: UpdateMemberResponse = await updateUserAPI(Data,id);
        console.log('######', ApisData)
        dispatch(updateMemberSuccess(ApisData));
    } catch (err) {
        dispatch(updateMemberFailed(err));
    }
}