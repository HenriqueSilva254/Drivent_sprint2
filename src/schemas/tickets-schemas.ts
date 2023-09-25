import Joi from 'joi';

export const ticketSchema = Joi.object<ticketTypeId>({
  ticketTypeId: Joi.number().integer().required(),
});

type  ticketTypeId = {
    ticketTypeId: number;
  };