import { AuthenticatedRequest } from "@/middlewares";
import { tiketService } from "@/services/tickets-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function tiketsTypes(req: AuthenticatedRequest, res: Response){
    const result = await tiketService.getAlltiketsTypes()
    return res.status(httpStatus.OK).send(result);
    
}

export async function tikets(req: AuthenticatedRequest, res: Response){
    const {userId} = req
    const result = await tiketService.geTikets(userId)
    return res.status(httpStatus.OK).send(result[0]);
}


export async function tiketsCreate(req: AuthenticatedRequest, res: Response){
    const {userId} = req
    const {ticketTypeId} = req.body
    
    const result = await tiketService.PosTickets(userId, Number(ticketTypeId))
    return res.status(httpStatus.CREATED).send(result);
}