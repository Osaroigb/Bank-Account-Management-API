import { Router } from 'express';
// import * as accountManagementController from './accountManagement.controller';

const router = Router();
router.get('/', (_req, res) => res.send('Welcome to Account Management Core API Service'));

export default router;
