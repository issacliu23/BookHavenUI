import { TransactionTypeEnum } from "../constants/enum";

export class TransactionHistory {
    transactionId: string;
    cashInvolved: string;
    pointsInvolved: number;
    transactionType: TransactionTypeEnum
    createdDate: Date;
}