/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { UserBase } from '../models/UserBase';
import type { UserCreate } from '../models/UserCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * 查询当前用户信息
     * @returns User Successful Response
     * @throws ApiError
     */
    public static readUsersMeUsersGet(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/',
        });
    }

    /**
     * 更新当前用户信息
     * @param requestBody
     * @returns User Successful Response
     * @throws ApiError
     */
    public static updateUsersMeUsersPut(
        requestBody: UserBase,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * 注册用户
     * @param requestBody
     * @returns User Successful Response
     * @throws ApiError
     */
    public static createUserUsersPost(
        requestBody: UserCreate,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
