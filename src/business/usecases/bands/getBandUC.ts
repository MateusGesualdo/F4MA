import { BandDatabase } from "../../../data/bandDatabase";

interface Query {
    id?: string
    name?: string
}

export default class GetBandUC {

    constructor(private databse: BandDatabase) { }

    async execute(input: Query) {

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

