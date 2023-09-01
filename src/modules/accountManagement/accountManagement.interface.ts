export interface CreateBankAccountParams {
  name: string;
  dob: Date;
  type: 'savings' | 'checking' | 'current';
  balance: number;
};

export type ResponseObject = {
  message: string;
  data: object;
};

export type AccountDetails = {
  accountNumber: number;
  accountName: string;
  dateOfBirth: string;
  accountType: 'savings' | 'checking' | 'current';
  initialBalance: number;
};
