/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountCreate } from '../models/AccountCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountsService {

    /**
     * Read Accounts
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readAccountsAccountsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/',
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * Bind Account
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static bindAccountAccountsPost(
        requestBody: AccountCreate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Unbind Account
     * @param accountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static unbindAccountAccountsAccountIdUnbindPost(
        accountId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/{account_id}/unbind',
            path: {
                'account_id': accountId,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Set Main Account
     * @param accountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static setMainAccountAccountsAccountIdSetMainPut(
        accountId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/{account_id}/set_main',
            path: {
                'account_id': accountId,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
