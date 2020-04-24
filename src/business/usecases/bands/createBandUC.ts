import { BandDatabase } from "../../../data/bandDatabase";
import { Band } from "../../entities/band";
import { v4 } from 'uuid'

interface CreateBandUCInput {
    name: string,
    genre: string,
    responsible: string
}

export default class CreateBandUC {

    constructor(private databse: BandDatabase) { }

    async execute(input: CreateBandUCInput) {

        const id = v4()

        if (!input.name || !input.genre || !input.responsible) {
            throw new Error("Dados insuficientes")
        }

        await this.databse.createBand(
            new Band(
                id,
                String(input.name),
                String(input.genre),
                String(input.responsible)
            )
        )
    }
}

