export interface ApiPatchRequest<REQ> {
    reqAuthentication: boolean;
    apiUrl: string;
    data?: REQ;
    token?: string;
    content_type: string;
}

interface HttpHeaders {
    accept: string;
    "content-type": string
    authorization?: string
}


export const apiPatchRequest = async <REQ, RES>(request: ApiPatchRequest<REQ>): Promise<RES> => {
    let headers: HttpHeaders = {
        "accept": "*/*",
        "content-type": request.content_type,
        authorization: ""
    }

    if (request.reqAuthentication && request.token) {
        headers.authorization = "Bearer " + request.token;
    } else {
        headers.authorization = undefined;
    }

    let headersCopy = JSON.parse(JSON.stringify(headers));

    const response: Response = await fetch(request.apiUrl, {
        method: "PATCH",
        headers: headersCopy,
        body: JSON.stringify(request.data)
    });
    return apiResponseHandler(response, request);
}

function apiResponseHandler<REQ, RES>(res: Response, request: ApiPatchRequest<REQ>): Promise<RES> {
    if (request.reqAuthentication && res.status === 401) {
        return Promise.reject("");
    } else {
        if (!res.ok) {
            const error = res.json() || res.status;
            return Promise.reject(error);
        } else {
            const success = res.json() as RES;
            return Promise.resolve(success);
        }
    }
}
