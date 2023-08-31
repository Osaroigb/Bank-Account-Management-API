import { BaseRepository } from './BaseRepository';
import { BankAccount } from '../models/BankAccount';

export class BankAccountRepo extends BaseRepository<BankAccount> {
  blockchainNetwork: BankAccount;

  constructor() {
    super(BankAccount);
  }
}
