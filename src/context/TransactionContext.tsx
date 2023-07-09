import {
  Dispatch,
  PropsWithChildren,
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

type TransactionContextType = {
  cards: ICard[];
  transactions: ITransaction[];
  selectedCard: ICard;
  filter: string;
  setFilter: Dispatch<React.SetStateAction<string>>;
  setSelectedCard: (id: string) => void;
  setTransactions: (updatedTransactions: ITransaction[]) => void;
  loadCardTransactions: (id: string) => void;
  sortTransactions: (option: string) => void;
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
  const { cards, transactions, selectedCard } = transactionData;

  const loadCards = async () => {
    try {
      const result = await getCards();
      if (!result) {
        return;
      }
      setTransactionData({ ...transactionData, cards: result });
    } catch (error) {
      console.log(error);
    }
  };

  const loadCardTransactions = async (cardId: string) => {
    try {
      const result = await getTransactions(cardId);
      if (!result) {
        return;
      }
      setTransactionData({
        ...transactionData,
        transactions: result,
      });
    } catch (error) {
      console.log(error);
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

  const setTransactions = (updatedTransactions: ITransaction[]) => {
    setTransactionData({
      ...transactionData,
      transactions: updatedTransactions,
    });
  };

  const sortTransactions = (option: string) => {
    const sortedTransactions =
      option === 'increasing'
        ? transactions.sort((a, b) => a.amount - b.amount)
        : transactions.sort((a, b) => b.amount - a.amount);
    setTransactions(sortedTransactions);
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
    cards: cards,
    transactions: transactions,
    selectedCard: selectedCard,
    loadCardTransactions,
    filter,
    setFilter,
    setTransactions,
    setSelectedCard,
    sortTransactions,
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
