export type TransactionType = "income" | "expense";

export type TransactionModels = {
    id: string;
    type: TransactionType;
    amount: number;
    description?: string;
    date: string;
}