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

}
