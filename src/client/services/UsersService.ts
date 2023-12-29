/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BestUsers } from '../models/BestUsers';
import type { User } from '../models/User';
import type { UserBase } from '../models/UserBase';
import type { UserCreate } from '../models/UserCreate';
import type { UserMonthlyAmount } from '../models/UserMonthlyAmount';
import type { UserMonthlyMaxAmount } from '../models/UserMonthlyMaxAmount';

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

    /**
     * Total amount of money sent/received by a user in a range of dates.
     * @param userId
     * @param startTime
     * @param endTime
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readUserTotalAmountUsersUserIdTotalAmountGet(
        userId: number,
        startTime?: (string | null),
        endTime?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user_id}/total_amount',
            path: {
                'user_id': userId,
            },
            query: {
                'start_time': startTime,
                'end_time': endTime,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Total/average amount of money sent and received by a user per month
     * @param userId
     * @returns UserMonthlyAmount Successful Response
     * @throws ApiError
     */
    public static readUserMonthlyAmountUsersUserIdMonthlyAmountGet(
        userId: number,
    ): CancelablePromise<UserMonthlyAmount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user_id}/monthly_amount',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * The transactions with the maximum amount of money per month.
     * @returns UserMonthlyMaxAmount Successful Response
     * @throws ApiError
     */
    public static readMonthlyMaxAmountUsersMonthlyMaxAmountGet(): CancelablePromise<Array<UserMonthlyMaxAmount>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/monthly_max_amount',
        });
    }

    /**
     * The best users (users who have sent/received the maximum total amount of money).
     * @returns BestUsers Successful Response
     * @throws ApiError
     */
    public static readBestUsersUsersBestUsersGet(): CancelablePromise<BestUsers> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/best_users',
        });
    }

}
