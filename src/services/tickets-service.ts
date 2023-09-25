import { TicketType } from '@prisma/client';
import { enrollmentNotFoundError, notFoundError } from '@/errors';
import { TicketPost, tiketsRepository } from '@/repositories';

async function getAlltiketsTypes(): Promise<TicketType[]> {
  const tikets = await tiketsRepository.findTiketsTypes();
  if (!tikets) throw notFoundError();

  return tikets;
}

async function geTikets(id: number) {
  const chcekUser = await tiketsRepository.userEnrrolment(id);
  if (!chcekUser) throw enrollmentNotFoundError();
  const tikets = await tiketsRepository.findTikets(id);
  if (tikets.length === 0) throw notFoundError();

  return tikets;
}

async function PosTickets(userId: number, ticketTypeId: number): Promise<TicketPost> {
  const chcekUser = await tiketsRepository.userEnrrolment(userId);
  if (!chcekUser) throw enrollmentNotFoundError();

  return await tiketsRepository.creaTikets(chcekUser.id, ticketTypeId);
}

export const tiketService = { getAlltiketsTypes, geTikets, PosTickets };
