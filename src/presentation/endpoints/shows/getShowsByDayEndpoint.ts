import { Request, Response } from "express";
import { ShowDatabase } from "../../../data/showDatabase";
import GetShowsByDayUC from "../../../business/usecases/shows/getShowsByDayUC";
import { ShowWeekDay } from "../../../business/entities/show";

export default async function getShowsByDayEndpoint(req: Request, res: Response) {
    try {
        const db = new ShowDatabase()
        const uc = new GetShowsByDayUC(db)

        let shows

        switch (req.params.day) {
            case "FRIDAY":
                shows = await uc.execute(ShowWeekDay.FRIDAY)
                break
            case "SATURDAY":
                shows = await uc.execute(ShowWeekDay.SATURDAY)
                break
            case "SUNDAY":
                shows = await uc.execute(ShowWeekDay.SUNDAY)
                break
            default:
                throw new Error("Dia inválido")
        }

        res
            .status(200)
            .send({ shows })
    } catch (err) {
        res
            .status(err.code || 400)
            .send({ message: err.message })
    }
}