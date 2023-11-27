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
     * Get Identifiers
     * @returns Identifier Successful Response
     * @throws ApiError
     */
    public static getIdentifiersIndentifiersGet(): CancelablePromise<Array<Identifier>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/indentifiers/',
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * Bind Identifier
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
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Unbind Identifier
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
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Verify Identifier
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
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
