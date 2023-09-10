import { RequestHandler } from 'express';
import * as bankAccountService from './accountManagement.service';
import { validateCreateAccountRequest } from './accountManagement.validation';
import { responseHandler, paginateResponseHandler } from '../../helpers/response';

export const createBankAccount: RequestHandler = async (req, res, next) => {
  try {
    const validatedData = validateCreateAccountRequest(req.body);
    const result = await bankAccountService.processCreateBankAccount(validatedData);

    res.json(responseHandler(result.message, result.data));
  } catch (error) {
    next(error);
  }
};

export const getBankAccountDetails: RequestHandler = async (req, res, next) => {
  try {
    const accountNumber = Number(req.params.accountNumber);
  
    const result = await bankAccountService.processGetBankAccountDetails(accountNumber);
    res.json(responseHandler(result.message, result.data));
  } catch (error) {
    next(error);
  }
};

export const getAllBankAccountDetails: RequestHandler = async (_req, res, next) => {
  try {
    const { paginate } = res.locals;
    
    const results = await bankAccountService.processGetAllBankAccountDetails({
      limit: paginate.limit,
      offset: paginate.offset
    });

    res.json(
      paginateResponseHandler({
        message: 'All bank accounts retrieved successfully!',
        paginate,
        count: results.count,
        rows: results.rows
      })
    );
  } catch (error) {
    next(error);
  }
};

export const deleteBankAccountDetails: RequestHandler = async (req, res, next) => {
  try {
    const accountNumber = Number(req.params.accountNumber);
  
    const result = await bankAccountService.processDeleteBankAccountDetails(accountNumber);
    res.json(responseHandler(result.message));
  } catch (error) {
    next(error);
  }
};
