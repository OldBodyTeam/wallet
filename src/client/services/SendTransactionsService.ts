/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SendTransaction } from '../models/SendTransaction';
import type { SendTransactionCreate } from '../models/SendTransactionCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SendTransactionsService {

    /**
     * Create Send Transaction
     * @param requestBody
     * @returns SendTransaction Successful Response
     * @throws ApiError
     */
    public static createSendTransactionSendPost(
        requestBody: SendTransactionCreate,
    ): CancelablePromise<SendTransaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/send/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
