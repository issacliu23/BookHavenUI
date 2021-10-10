export enum GenreEnum {
    Fantasy,
    Romance,
    Thriller,
    Comedy
}

export const GenreList = [
  { label: 'Fantasy', value: GenreEnum.Fantasy },
  { label: 'Romance', value: GenreEnum.Romance },
  { label: 'Thriller', value: GenreEnum.Thriller },
  { label: 'Comedy', value: GenreEnum.Comedy }
]

export enum TransactionTypeEnum {
  TopUpWallet,
  WithdrawFromWallet,
  PurchaseChapter
}

export const TransactionTypeList = [
  { label: 'Top-up', value: TransactionTypeEnum.TopUpWallet },
  { label: 'Withdraw', value: TransactionTypeEnum.WithdrawFromWallet },
  { label: 'Purchase Chapter', value: TransactionTypeEnum.PurchaseChapter }
]
