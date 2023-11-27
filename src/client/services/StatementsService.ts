/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StatementsService {

    /**
     * Get Statements
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getStatementsStatementsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statements/',
            errors: {
                404: `Not found`,
            },
        });
    }

}
