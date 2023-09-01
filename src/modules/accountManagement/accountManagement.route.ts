import { Router } from 'express';
import * as accountManagementController from './accountManagement.controller';

const router = Router();

router.post('/', accountManagementController.createBankAccount);
// router.get('/:accountNumber', accountManagementController.getBankAccount);

// router.get('/', accountManagementController.getAllBankAccounts);
// router.delete('/:accountNumber', accountManagementController.deleteBankAccount);

export default router;
