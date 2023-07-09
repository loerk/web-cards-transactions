import { useState } from 'react';
import { ICard, getCards, getTransactions } from '..';

type FetchState = {
  loading: boolean;
  error: string;
  data: any;
  dataType: 'card' | 'transactions';
};

interface UseFetchProps {
  fetchCards?: boolean;
  fetchTransactions?: boolean;
  id?: string;
}
export async function useFetch({
  fetchCards,
  fetchTransactions,
  id,
}: UseFetchProps) {
  const [fetchState, setFetchState] = useState<FetchState>({} as FetchState);
  try {
    setFetchState({ ...fetchState, loading: true });
    if (fetchCards) {
      const cards: ICard[] = await getCards();
      if (!cards) {
        throw new Error();
      }
      setFetchState({ ...fetchState, data: cards, dataType: 'card' });
    }
    if (fetchTransactions && id) {
      const transactions: ICard[] = await getTransactions(id);
      if (!transactions) {
        throw new Error();
      }
      setFetchState({
        ...fetchState,
        data: transactions,
        dataType: 'transactions',
      });
    }
  } catch (err) {
    setFetchState({
      ...fetchState,
      error: 'something went wrong while fetching data',
    });
  } finally {
    setFetchState({ ...fetchState, loading: false });
  }

  return fetchState;
}

export default useFetch;
