import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateMemeberResponseData, UpdateMemberResponse, UserListResponse } from "../model/member";


type InitialData = {
    membersList: UserListResponse | any,
    deleteStatus: any,
    addMemebr: CreateMemeberResponseData | any,
    updateStatus: UpdateMemberResponse | any,
};

const initialState: InitialData = {
    membersList: null,
    deleteStatus: null,
    addMemebr: null,
    updateStatus: null
};
const slice = createSlice({
    name: "memberSlice",
    initialState,
    reducers: {
        setMembersList: (state, action: PayloadAction<Object>) => {
            state.membersList = action.payload;
        },
        setDeleteStatus: (state, action: PayloadAction<any>) => {
            state.deleteStatus = {value:action.payload.isDeleted};
        },
        addMemberSuccess: (
            state,
            action: PayloadAction<Object>
        ) => {
            state.addMemebr = action.payload;

        },
        addMemberFailed: (state, action: PayloadAction<any>) => {
            state.addMemebr = 'error'

        },
        updateMemberSuccess: (
            state,
            action: PayloadAction<Object>
        ) => {
            state.updateStatus = action.payload;

        },
        updateMemberFailed: (state, action: PayloadAction<any>) => {
            state.updateStatus = {status:'error'}

        },


    }
})
export const memberSlice = slice.reducer;
export const {
    setMembersList,
    setDeleteStatus,
    addMemberSuccess,
    addMemberFailed,
    updateMemberFailed,
    updateMemberSuccess

} = slice.actions;