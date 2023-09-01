import { Router } from 'express';
import { paginate } from '../../middlewares/paginate';
import * as accountManagementController from './accountManagement.controller';

const router = Router();

/**
 * @swagger
 *  /v1/bank:
 *   post:
 *     summary: Create a new bank account
 *     description: Generate new bank account details for a user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               dob:
 *                 type: string
 *               type:
 *                 type: string
 *               balance:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Bank account details.
 */
router.post('/', accountManagementController.createBankAccount);

/**
 * @swagger
 * /v1/bank:
 *   get:
 *     summary: Get a list of all bank accounts
 *     description: Retrieve a list of all user bank accounts.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number for pagination.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The maximum number of items to return per page.
 *     responses:
 *       '200':
 *         description: A list of all bank accounts.
 */
router.get('/', paginate, accountManagementController.getAllBankAccountDetails);

/**
 * @swagger
 * /v1/bank/:accountNumber:
 *   parameters:
 *     - in: path
 *       name: accountNumber
 *       required: true
 *       description: The user's unique 10-digit account number.
 *       schema:
 *         type: integer
 *         format: int64
 *   get:
 *     summary: Get user's bank account
 *     description: Retrieve a user's bank account details.
 *     responses:
 *       '200':
 *         description: A user's bank account.
 */
router.get('/:accountNumber', accountManagementController.getBankAccountDetails);

export default router;
