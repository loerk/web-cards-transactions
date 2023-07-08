import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { ICard, ITransaction } from '../ApiClient';

type TransactionsDataType = {
  cards: ICard[];
  transactions: ITransaction[];
  activeCard: ICard;
};

type TransactionContextType = {
  transactionData: TransactionsDataType;
  setTransactionData: Dispatch<SetStateAction<TransactionsDataType>>;
};
const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

export const TransactionContextProvider = ({ children }: PropsWithChildren) => {
  const [transactionData, setTransactionData] = useState<TransactionsDataType>({
    cards: [],
    transactions: [],
    activeCard: { description: '', id: '' },
  });
  const contextValue = { transactionData, setTransactionData };
  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};
