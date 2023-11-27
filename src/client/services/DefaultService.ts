/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_login_token_post } from '../models/Body_login_token_post';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Read Version
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readVersionVersionGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/version',
        });
    }

    /**
     * Read Me
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readMeMeGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me',
        });
    }

    /**
     * Login
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public static loginTokenPost(
        formData: Body_login_token_post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
