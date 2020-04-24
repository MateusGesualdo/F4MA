import { Request, Response } from "express";
import { ShowDatabase } from "../../../data/showDatabase";
import CreateShowUC from "../../../business/usecases/shows/createShowUC";

export default async function createShowEndpoint(req:Request, res:Response){
    try{
        const db = new ShowDatabase()
        const uc = new CreateShowUC(db)
         
        await uc.execute({
            day: req.body.day,   
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            bandId: req.body.bandId    
        })

        res.status(200).send("Sucesso!")
    } catch (err) {
        res.status(err.code || 400).send(err.message)
    }
}