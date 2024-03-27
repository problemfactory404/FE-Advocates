import { AppThunk } from "../../../store/store"
import { ClientApResponseDTO, createClientDto, createClientResponseDto } from "../models/clients";
import { addClientAPI, deletClientAPI, fetchClientsAPI, updateClientAPI} from "./api";

import { addClientFailed, addClientSuccess, fetchClientSuccess, setDeleteStatus, updateClientFailed, updateClientSuccess } from "./slice";

export const getClientsList = (): AppThunk => async (dispatch) => {
    try {
        const ApisData: ClientApResponseDTO = await fetchClientsAPI();
        dispatch(fetchClientSuccess(ApisData));
    } catch (err) {
        dispatch(fetchClientSuccess([]));
    }
}

export const deleteClient = (id: string): AppThunk => async (dispatch) => {
    try {
        const ApisData: any = await deletClientAPI(id);
        dispatch(setDeleteStatus(ApisData));
    } catch (err) {
        dispatch(setDeleteStatus({
            code: -999,
            status: "failed",
            message: "Deleted successfully",
            data: null
}));
    }
}


export const addClientFunction = (Data: createClientDto): AppThunk => async (dispatch) => {
    try {
        const ApisData: createClientResponseDto = await addClientAPI(Data);
        dispatch(addClientSuccess(ApisData));
    } catch (err) {
        dispatch(addClientFailed(err));
    }
}

export const updateClientFunction = (Data: createClientDto,id:string): AppThunk => async (dispatch) => {
    try {
        const ApisData: any = await updateClientAPI(Data,id);
        console.log('######', ApisData)
        dispatch(updateClientSuccess(ApisData));
    } catch (err) {
        dispatch(updateClientFailed(err));
    }
}