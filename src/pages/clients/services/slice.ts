import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClientApResponseDTO, createClientResponseDto } from "../models/clients";


type InitialData = {
    clientsList: ClientApResponseDTO | any,
    deleteStatus: any,
    addClient: createClientResponseDto | any,
    updateStatus: any,
};

const initialState: InitialData = {
    deleteStatus: null,
    updateStatus: null,
    clientsList: null,
    addClient: null
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
        fetchClientSuccess: (
            state,
            action: PayloadAction<any>
        ) => {
            state.clientsList = action.payload;

        },


    }
})
export const clientSlice = slice.reducer;
export const {
    addClientFailed,
    addClientSuccess,
    setDeleteStatus,
    fetchClientSuccess,
    updateClientSuccess,
    updateClientFailed


} = slice.actions;