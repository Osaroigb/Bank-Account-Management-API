import joi from 'joi';
import { BadRequestError } from '../../errors';
import { validate } from '../../utils/validator';
import { AccountType } from './accountManagement.constant';
import { CreateBankAccountParams } from './accountManagement.interface';

const { object, string, number } = joi.types();

// Custom validation function for date of birth
const validateDateOfBirth = (value: string): Date => {

  // Regular expression for 'YYYY-MM-DD' format
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  
  if (!regex.test(value)) {
    throw new BadRequestError('Invalid date of birth format!');
  }
  
  const parts = value.split('-');
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    throw new BadRequestError('Invalid date of birth format!');
  }
  
  // Check for valid day and month ranges
  if (day < 1 || day > 31 || month < 1 || month > 12) {
    throw new BadRequestError('Invalid date of birth format!');
  }
  
  const date = new Date(year, month - 1, day);
  
  if (isNaN(date.getTime())) {
    throw new BadRequestError('Invalid date of birth format!');
  }
  
  return date;
};
  
// Custom validation function for initial balance
const validateBalance = (value: number): number => {
  if (value < 0) {
    throw new BadRequestError('Negavite initial balance not allowed!');
  }

  return value;
};

export const validateBankAccountRequest = (payload: unknown): CreateBankAccountParams => {
  
  const schema = object.keys({
    name: string.max(30).trim().required(),
    dob: string.custom(validateDateOfBirth).required(),
    type: string.valid(AccountType.SAVINGS, AccountType.CHECKING, AccountType.CURRENT).required(),
    balance: number.custom(validateBalance).precision(10).max(9999999999.99).required()
  });
  
  return validate(payload, schema);
};
