/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Identifier } from '../models/Identifier';
import type { IdentifierCreate } from '../models/IdentifierCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IndentifiersService {

    /**
     * 用户查询自己的标识符
     * @returns Identifier Successful Response
     * @throws ApiError
     */
    public static getIdentifiersIndentifiersGet(): CancelablePromise<Array<Identifier>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/indentifiers/',
        });
    }

    /**
     * 用户绑定一个标识符，前提是没有人使用过
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static bindIdentifierIndentifiersPost(
        requestBody: IdentifierCreate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/indentifiers/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * 用户批量绑定标识符
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static bindIdentifiersIndentifiersBatchBindPost(
        requestBody: Array<IdentifierCreate>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/indentifiers/batch_bind',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * 用户删除属于自己的标识符
     * @param identifierValue
     * @returns any Successful Response
     * @throws ApiError
     */
    public static unbindIdentifierIndentifiersIdentifierValueUnbindPost(
        identifierValue: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/indentifiers/{identifier_value}/unbind',
            path: {
                'identifier_value': identifierValue,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * 用户验证一个标识符
     * @param identifierValue
     * @returns any Successful Response
     * @throws ApiError
     */
    public static verifyIdentifierIndentifiersIdentifierValueVerifyPost(
        identifierValue: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/indentifiers/{identifier_value}/verify',
            path: {
                'identifier_value': identifierValue,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
