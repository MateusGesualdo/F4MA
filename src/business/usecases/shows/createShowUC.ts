import { v4 } from 'uuid'
import { ShowDatabase } from "../../../data/showDatabase";
import { Show, ShowWeekDay } from "../../entities/show";

interface CreateShowUCInput {
    day: ShowWeekDay,   
    startTime: number,
    endTime: number,
    bandId: string    
}

export default class CreateShowUC {

    constructor(private databse: ShowDatabase) { }

    async execute(input: CreateShowUCInput) {

        const id = v4()

        if (
            !input.bandId ||
            !input.startTime ||
            !input.endTime ||
            !input.day
        ) {
            throw new Error("Dados insuficientes")
        }

        await this.databse.createShow(
            new Show(
                id,
                input.day,
                Number(input.startTime),
                Number(input.endTime),
                String(input.bandId)
            )
        )
    }
}
