import { Router } from 'express';
import { paginate } from '../../middlewares/paginate';
import * as accountManagementController from './accountManagement.controller';

const router = Router();

router.post('/', accountManagementController.createBankAccount);
router.get('/', paginate, accountManagementController.getAllBankAccountDetails);

router.get('/:accountNumber', accountManagementController.getBankAccountDetails);
export default router;
