import { BankAccountAttributes } from '../database/models/BankAccount';

declare global {
  
  namespace Express {
    
    interface Request {
      bankAccount?: BankAccountAttributes;
    }
  }
}
