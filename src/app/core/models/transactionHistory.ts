import { TransactionTypeEnum } from "../constants/enum";

export class TransactionHistory {
    transactionId: string;
    cashDeducted: string;
    pointsDeducted: number;
    pointsAwarded: number;
    transactionDate: Date;
    transactionType: TransactionTypeEnum

}