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
