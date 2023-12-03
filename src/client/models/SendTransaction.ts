/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Identifier } from './Identifier';

export type SendTransaction = {
    amount: number;
    memo: string;
    send_id: number;
    send_status: string;
    initiated_time: string;
    completed_time: (string | null);
    identifier: Identifier;
};

