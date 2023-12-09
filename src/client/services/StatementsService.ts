/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Statement } from '../models/Statement';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StatementsService {

    /**
     * 查询用户的收支明细
     * @returns Statement Successful Response
     * @throws ApiError
     */
    public static getStatementsStatementsGet(): CancelablePromise<Statement> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statements/',
        });
    }

    /**
     * 按月分组查询用户的收支明细
     * @param year
     * @param month
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getIncomeStatementsGroupByMonthStatementsGroupGet(
        year?: number,
        month?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statements/group',
            query: {
                'year': year,
                'month': month,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * 带条件的查询用户的收支明细
     * @param ssn
     * @param identifierValue
     * @param startTime
     * @param endTime
     * @returns Statement Successful Response
     * @throws ApiError
     */
    public static getStatementsWithFilterStatementsFilterGet(
        ssn?: (string | null),
        identifierValue?: (string | null),
        startTime?: (string | null),
        endTime?: (string | null),
    ): CancelablePromise<Statement> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statements/filter',
            query: {
                'ssn': ssn,
                'identifier_value': identifierValue,
                'start_time': startTime,
                'end_time': endTime,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
