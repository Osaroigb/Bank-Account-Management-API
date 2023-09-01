import { RequestHandler } from 'express';
import { responseHandler } from '../../helpers/response';
import * as bankAccountService from './accountManagement.service';
import { validateBankAccountRequest } from './accountManagement.validation';

export const createBankAccount: RequestHandler = async (req, res, next) => {
  try {
    const validatedData = validateBankAccountRequest(req.body);
    const result = await bankAccountService.processCreateBankAccount(validatedData);

    res.json(responseHandler(result.message, result.data));
  } catch (error) {
    next(error);
  }
};
