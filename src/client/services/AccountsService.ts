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
     * 读取用户名下所有账户
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readAccountsAccountsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/',
        });
    }

    /**
     * 用户绑定一个新的account
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
                422: `Validation Error`,
            },
        });
    }

    /**
     * 用户解绑已有的账户
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
                422: `Validation Error`,
            },
        });
    }

    /**
     * 设置一个账户为主账户，同时设置其他账户为非主账户
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
                422: `Validation Error`,
            },
        });
    }

}
