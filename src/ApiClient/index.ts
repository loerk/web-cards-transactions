// import { cards } from "./data/cards";
// import { transactions } from "./data/transactions";
export interface ICard {
  id: string;
  description: string;
}

export interface ITransaction {
  id: string;
  description: string;
  amount: number;
}

export async function getCards(): Promise<ICard[]> {
  const cards = await (await import('./data/cards.json')).default;
  return cards;
}

export async function getTransactions(cardId: string): Promise<ITransaction[]> {
  const transactions: Record<string, ITransaction[]> = await (
    await import('./data/transactions.json')
  ).default;

  if (transactions[cardId]) {
    return transactions[cardId];
  }

  throw new Error('cardId not found');
}
