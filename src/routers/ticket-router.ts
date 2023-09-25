import { Router } from 'express';
import { tikets, tiketsCreate, tiketsTypes } from '@/controllers/tickets-controller';
import { authenticateToken, validateBody } from '@/middlewares';
import { ticketSchema } from '@/schemas/tickets-schemas';

const tiketsRouter = Router();

tiketsRouter.all('/*', authenticateToken);
tiketsRouter.get('/', tikets);
tiketsRouter.get('/types', tiketsTypes);
tiketsRouter.post('/', validateBody(ticketSchema), tiketsCreate);

export { tiketsRouter };
