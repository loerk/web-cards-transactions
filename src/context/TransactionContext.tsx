import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ICard, ITransaction, getCards, getTransactions } from '../ApiClient';

type TransactionsDataType = {
  cards: ICard[];
  transactions: ITransaction[];
  selectedCard: ICard;
};
type LoadingState = {
  loading: boolean;
  error: string;
};

type TransactionContextType = {
  cards: ICard[];
  transactions: ITransaction[];
  selectedCard: ICard;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  setSelectedCard: (id: string) => void;
  loadCardTransactions: (id: string) => void;
  setSortMode: Dispatch<SetStateAction<'asc' | 'desc' | null>>;
  sortMode: 'asc' | 'desc' | null;
  loadingState: { cards: LoadingState; transactions: LoadingState };
};
const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

export const TransactionContextProvider = ({ children }: PropsWithChildren) => {
  const [transactionData, setTransactionData] = useState<TransactionsDataType>({
    cards: [],
    transactions: [],
    selectedCard: { description: '', id: '' },
  });
  const [filter, setFilter] = useState('');
  const [sortMode, setSortMode] = useState<'asc' | 'desc' | null>(null);
  const [cardsLoadingState, setCardsLoadingState] = useState({
    loading: false,
    error: '',
  });
  const [transactionsLoadingState, setTransactionsLoadingState] = useState({
    loading: false,
    error: '',
  });

  const { cards, transactions, selectedCard } = transactionData;

  const loadCards = async () => {
    try {
      const result = await getCards();
      if (!result) {
        throw new Error('something went wrong while loading cards');
      }
      setTransactionData({ ...transactionData, cards: result });
    } catch (error) {
      setCardsLoadingState({ ...cardsLoadingState, error: error as string });
    }
  };

  const loadCardTransactions = async (cardId: string) => {
    try {
      const result = await getTransactions(cardId);
      if (!result) {
        throw new Error('something went wrong while loading transactions');
      }
      setTransactionData({
        ...transactionData,
        transactions: result,
      });
    } catch (error) {
      setTransactionsLoadingState({
        ...transactionsLoadingState,
        error: error as string,
      });
    }
  };

  const setSelectedCard = (id: string) => {
    const selected = transactionData.cards.find((card) => card.id === id);
    if (!selected) {
      return;
    }
    setTransactionData({
      ...transactionData,
      selectedCard: selected,
    });
  };

  const getSortedAndFilteredTransactions = () => {
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
  useEffect(() => {
    loadCards();
  }, []);

  useEffect(() => {
    if (!selectedCard.id) {
      return;
    }
    loadCardTransactions(selectedCard.id);
  }, [selectedCard]);

  const contextValue = {
    cards,
    transactions: getSortedAndFilteredTransactions(),
    selectedCard,
    loadCardTransactions,
    filter,
    setFilter,
    setSelectedCard,
    setSortMode,
    sortMode,
    loadingState: {
      cards: cardsLoadingState,
      transactions: transactionsLoadingState,
    },
  };

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  return useContext(TransactionContext);
};
