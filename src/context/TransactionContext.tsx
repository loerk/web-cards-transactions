import {
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
  setSelectedCard: (id: string) => void;
  loadCardTransactions: (id: string) => void;
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

  useEffect(() => {
    loadCards();
  }, []);
  useEffect(() => {
    loadCardTransactions(selectedCard.id);
  }, [selectedCard]);
  const contextValue = {
    cards: transactionData.cards,
    transactions: transactionData.transactions,
    selectedCard: transactionData.selectedCard,
    setSelectedCard,
    loadCardTransactions,
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
