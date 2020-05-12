import { Request, Response } from "express";
import { BandDatabase } from "../../../data/bandDatabase";
import CreateBandUC from "../../../business/usecases/bands/createBandUC";

export default async function createBandEndpoint(req: Request, res: Response) {
    try {
        const db = new BandDatabase()
        const uc = new CreateBandUC(db)

        await uc.execute({
            name: req.body.name,
            genre: req.body.genre,
            responsible: req.body.responsible
        })

        res
            .status(200)
            .send({ message: "Sucesso!" })
    } catch (err) {
        res
            .status(err.code || 400)
            .send({ message: err.message })
    }
}