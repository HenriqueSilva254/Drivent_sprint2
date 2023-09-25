import { enrollmentNotFoundError, notFoundError } from "@/errors";
import { formaTickets } from "@/protocols";
import { TicketPost, tiketsRepository } from "@/repositories";


async function getAlltiketsTypes(): Promise<formaTickets[]> {
    const tikets = await tiketsRepository.findTiketsTypes()
    if (!tikets) throw notFoundError();

    const formaTickets = tikets.map((tikets) => ({
      ...tikets,
      createdAt: formatDate(tikets.createdAt),
      updatedAt: formatDate(tikets.updatedAt),
    }))
    return formaTickets
  }

  async function geTikets(id: number) {
    const chcekUser = await tiketsRepository.userEnrrolment(id)
    if (!chcekUser) throw enrollmentNotFoundError();
    const tikets = await tiketsRepository.findTikets(id)
    if (tikets.length === 0) throw notFoundError();

    // const formaTickets = tikets.map((tikets) => ({
    //   ...tikets,
    //   createdAt: formatDate(tikets.createdAt),
    //   updatedAt: formatDate(tikets.updatedAt),
    // }))

    return tikets
  }

  function formatDate(date: Date){
    const format = new Date(date)
    return format.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})
  }

  async function PosTickets(userId: number, ticketTypeId: number): Promise<TicketPost>{
    const chcekUser = await tiketsRepository.userEnrrolment(userId)
    if (!chcekUser) throw enrollmentNotFoundError();

    return await tiketsRepository.creaTikets(chcekUser.id, ticketTypeId)
  }
  

export const tiketService = {getAlltiketsTypes, geTikets, PosTickets}