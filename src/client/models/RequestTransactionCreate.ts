/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserReceiveRequestCreate } from './UserReceiveRequestCreate';

export type RequestTransactionCreate = {
    memo: string;
    deadline: string;
    receiver: Array<UserReceiveRequestCreate>;
};

