import { BaseRepository } from './BaseRepository';
import { BankAccount } from '../models/BankAccount';

export class BankAccountRepo extends BaseRepository<BankAccount> {
  bankAccount: BankAccount;

  constructor() {
    super(BankAccount);
  }
}
