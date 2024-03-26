import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createClientResponseDto } from "../models/clients";


type InitialData = {
    clientsList: any,
    deleteStatus: any,
    addClient: createClientResponseDto | any,
    updateStatus: any,
};

const initialState: InitialData = {
    deleteStatus: null,
    updateStatus: null,
    clientsList: undefined,
    addClient: undefined
};
const slice = createSlice({
    name: "clientSlice",
    initialState,
    reducers: {
        setClientsList: (state, action: PayloadAction<Object>) => {
            state.clientsList = action.payload;
        },
        setDeleteStatus: (state, action: PayloadAction<any>) => {
            state.deleteStatus = { value: action.payload.isDeleted };
        },
        addClientSuccess: (
            state,
            action: PayloadAction<Object>
        ) => {
            state.addClient = action.payload;

        },
        addClientFailed: (state, action: PayloadAction<any>) => {
            state.addClient = 'error'

        },
        updateClientSuccess: (
            state,
            action: PayloadAction<Object>
        ) => {
            state.updateStatus = action.payload;

        },
        updateClientFailed: (state, action: PayloadAction<any>) => {
            state.updateStatus = { status: 'error' }

        },


    }
})
export const clientSlice = slice.reducer;
export const {
    addClientFailed,
    addClientSuccess,
    setDeleteStatus,


} = slice.actions;