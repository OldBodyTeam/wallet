/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestTransaction } from './RequestTransaction';
import type { SendTransaction } from './SendTransaction';
import type { User } from './User';

export type StatementExpense = {
    statement_id: number;
    amount: number;
    completed_time: string;
    request: (RequestTransaction | null);
    send: (SendTransaction | null);
    to_user: User;
};

