// import { logger } from '../../utils/logger';
// import { ResourceNotFoundError } from '../../errors';
import { BankAccountRepo } from '../../database/repositories';
import { accountNumberGenerator } from './accountManagement.helper';
import { CreateBankAccountParams, ResponseObject} from './accountManagement.interface';

const bankAccountRepo = new BankAccountRepo();

export const processCreateBankAccount = async (data: CreateBankAccountParams): Promise<ResponseObject> => {
  
  const userBankAccountNumber = await accountNumberGenerator();

  await bankAccountRepo.create({
    accountName: data.name,
    dateOfBirth: data.dob,
    accountNumber: userBankAccountNumber,
    accountType: data.type,
    initialBalance: data.balance
  });

  return {
    message: 'User bank account created successfully!',
    data: {
      accountNumber: userBankAccountNumber,
      accountName: data.name,
      accountType: data.type,
      initialBalance: data.balance
    }  
  }
};
