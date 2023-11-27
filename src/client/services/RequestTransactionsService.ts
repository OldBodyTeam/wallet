/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RequestTransactionCreate } from '../models/RequestTransactionCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RequestTransactionsService {

    /**
     * Create Request Transaction
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createRequestTransactionRequestPost(
        requestBody: RequestTransactionCreate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/request/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Request Transaction By Month
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getRequestTransactionByMonthRequestMonthGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/request/month',
            errors: {
                404: `Not found`,
            },
        });
    }

}
