import { ResourceNotFoundError } from '../../errors';
import { BankAccountRepo } from '../../database/repositories';
import { accountNumberGenerator } from './accountManagement.helper';
import { CreateBankAccountParams, ResponseObject } from './accountManagement.interface';

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

export const processGetBankAccountDetails = async (accountNumber: number): Promise<ResponseObject> => {
  const userBankAccount = await bankAccountRepo.findOne({
    where: { accountNumber }
  });
  
  if (!userBankAccount) {
    throw new ResourceNotFoundError('Bank account with this account number does not exist!');
  }
  
  return {
    message: 'User bank account details retrieved successfully!',
    data: userBankAccount
  }
};

export const processGetAllBankAccountDetails = async (
  options?: { limit: number; offset: number }
): Promise<{ count: number; rows: { [key: string]: any }[] }> => {
  
  const userBankAccounts = await bankAccountRepo.findAndCountAll({
    ...(options && {
      limit: +options.limit,
      offset: +options.offset
    }),
    order: [['createdAt', 'ASC']]
  });

  if (userBankAccounts.rows.length === 0) {
    throw new ResourceNotFoundError('No user bank accounts found!');
  }

  return userBankAccounts;
};
