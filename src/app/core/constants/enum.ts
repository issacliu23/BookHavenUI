export enum GenreEnum {
    Fantasy,
    Romance,
    Thriller,
    Comedy
}

export const GenreList = [
  { label: 'Fantasy', value: GenreEnum.Fantasy, color: '#B026FF' },
  { label: 'Romance', value: GenreEnum.Romance, color: '#FF496C' },
  { label: 'Thriller', value: GenreEnum.Thriller, color: '#FF0000' },
  { label: 'Comedy', value: GenreEnum.Comedy, color: '#EEA800' }
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
