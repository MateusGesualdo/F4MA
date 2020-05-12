import { BandDatabase } from "../../../data/bandDatabase";

interface GetBandUCInput {
    id?: string
    name?: string
}

export default class GetBandUC {

    constructor(private databse: BandDatabase) { }

    async execute(input: GetBandUCInput) {

        let band

        if (input.id) {
            band = await this.databse.getBandById(String(input.id))          
        } else if (input.name) {
            band = await this.databse.getBandByName(String(input.name))          
        } else {
            throw new Error("Dados insuficientes")
        }

        if (!band) {
            throw new Error("Banda não encontrada")
        }

        return band 

    }
}

