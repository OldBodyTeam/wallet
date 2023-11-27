/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountCreate } from '../models/AccountCreate';
import type { User } from '../models/User';
import type { UserBase } from '../models/UserBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AdminService {

    /**
     * Read Users
     * @param skip
     * @param limit
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readUsersAdminUsersGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * @deprecated
     * Read User
     * @param userId
     * @returns User Successful Response
     * @throws ApiError
     */
    public static readUserAdminUsersUserIdGet(
        userId: number,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update User
     * @param userId
     * @param requestBody
     * @returns User Successful Response
     * @throws ApiError
     */
    public static updateUserAdminUsersUserIdPut(
        userId: number,
        requestBody: UserBase,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/users/{user_id}',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Accounts
     * @param skip
     * @param limit
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readAccountsAdminAccountsGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/accounts',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Account
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createAccountAdminAccountsPost(
        requestBody: AccountCreate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/accounts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Identifiers
     * @param skip
     * @param limit
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readIdentifiersAdminIdentifiersGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/identifiers',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Request Transactions
     * @param skip
     * @param limit
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readRequestTransactionsAdminRequestTransactionsGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/request_transactions',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Send Transactions
     * @param skip
     * @param limit
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readSendTransactionsAdminSendTransactionsGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/send_transactions',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Statements
     * @param skip
     * @param limit
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readStatementsAdminStatementsGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/statements',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
