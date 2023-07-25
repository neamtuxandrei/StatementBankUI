import { Customer } from './Customer';
import { Transaction } from './Transaction';

export interface Account {
  customer: Customer;
  transactions: Transaction[];
  balance: number;
}
