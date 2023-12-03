/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StatementExpense } from './StatementExpense';
import type { StatementIncome } from './StatementIncome';

export type Statement = {
    income: Array<StatementIncome>;
    expense: Array<StatementExpense>;
};

