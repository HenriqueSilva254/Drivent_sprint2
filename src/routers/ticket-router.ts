
import { tikets, tiketsCreate, tiketsTypes } from '@/controllers/tickets-controller';
import { authenticateToken, validateBody } from '@/middlewares';
import { ticketSchema } from '@/schemas/tickets-schemas';
import { Router } from 'express';
 

const tiketsRouter = Router();

tiketsRouter.all('/*', authenticateToken )
tiketsRouter.get('/', tikets);
tiketsRouter.get('/types', tiketsTypes);
tiketsRouter.post('/', validateBody(ticketSchema), tiketsCreate);

export { tiketsRouter };
