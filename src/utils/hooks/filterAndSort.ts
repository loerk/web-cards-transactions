import { ITransaction } from '../../ApiClient';

export const getSortedAndFilteredTransactions = (
  transactions: ITransaction[],
  sortMode: 'asc' | 'desc' | null,
  filter: string
) => {
  return transactions
    .filter(
      (transaction) =>
        !filter || transaction.amount >= Number(filter.replace(',', '.'))
    )
    .sort((a, b) => {
      if (!sortMode) {
        return 0;
      }
      if (sortMode === 'asc') {
        return a.amount - b.amount;
      }
      return b.amount - a.amount;
    });
};
