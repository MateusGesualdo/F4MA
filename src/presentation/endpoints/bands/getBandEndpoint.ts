import { Request, Response } from "express";
import { BandDatabase } from "../../../data/bandDatabase";
import GetBandUC from "../../../business/usecases/bands/getBandUC";

export default async function getBandEndpoint(req: Request, res: Response) {
    try {
        const db = new BandDatabase()
        const uc = new GetBandUC(db)
        const band = await uc.execute(req.query)

        res
            .status(200)
            .send({ band })
    } catch (err) {
        res
            .status(err.code || 400)
            .send({ message: err.message })
    }
}