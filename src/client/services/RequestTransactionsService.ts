/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RequestTransaction } from '../models/RequestTransaction';
import type { RequestTransactionCreate } from '../models/RequestTransactionCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RequestTransactionsService {

    /**
     * 用户查询所有收款请求
     * @returns RequestTransaction Successful Response
     * @throws ApiError
     */
    public static getRequestTransactionsRequestGet(): CancelablePromise<Array<RequestTransaction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/request/',
        });
    }

    /**
     * 用户发起一次收款请求
     * @param requestBody
     * @returns RequestTransaction Successful Response
     * @throws ApiError
     */
    public static createRequestTransactionRequestPost(
        requestBody: RequestTransactionCreate,
    ): CancelablePromise<RequestTransaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/request/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * 用户查询收到的所有他人的收款请求
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUserReceiveRequestsRequestReceiveGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/request/receive',
        });
    }

    /**
     * 用户处理收款请求
     * @param requestTransactionId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static confirmUserReceiveRequestRequestRequestTransactionIdConfirmPost(
        requestTransactionId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/request/{request_transaction_id}/confirm',
            path: {
                'request_transaction_id': requestTransactionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
