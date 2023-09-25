
import { tikets, tiketsCreate, tiketsTypes } from '@/controllers/tickets-controller';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';
 

const tiketsRouter = Router();

tiketsRouter.all('/*', authenticateToken )
tiketsRouter.get('/', tikets);
tiketsRouter.get('/types', tiketsTypes);
tiketsRouter.post('/', tiketsCreate);

export { tiketsRouter };
