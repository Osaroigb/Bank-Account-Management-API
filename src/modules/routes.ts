import { Router } from 'express';
import { routes as bankRoutes } from './accountManagement';

export const initiateModuleRoutes = (router: Router): void => {
  router.use('/v1/bank', bankRoutes);
};
