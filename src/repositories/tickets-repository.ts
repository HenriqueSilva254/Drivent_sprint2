import { Enrollment, Ticket, TicketType } from '@prisma/client';
import { prisma } from '@/config';

async function findTiketsTypes(): Promise<TicketType[]> {
  return await prisma.ticketType.findMany();
}

async function userEnrrolment(id: number): Promise<Enrollment> {
  return await prisma.enrollment.findFirst({
    where: { userId: id },
  });
}

async function findTikets(userId: number): Promise<Ticket[]> {
  const tiket = await prisma.ticket.findMany({
    where: { Enrollment: { userId } },
    include: { TicketType: true },
  });
  return tiket;
}

async function creaTikets(enrollmentId: number, ticketTypeId: number): Promise<TicketPost> {
  const tiket = await prisma.ticket.create({
    data: { enrollmentId, ticketTypeId, status: 'RESERVED' },
    include: { TicketType: true },
  });
  return tiket;
}

export type TicketPost = Ticket & { TicketType: TicketType };

export const tiketsRepository = { findTikets, findTiketsTypes, userEnrrolment, creaTikets };
