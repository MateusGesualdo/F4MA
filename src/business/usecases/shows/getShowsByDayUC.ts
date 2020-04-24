import { ShowWeekDay } from "../../entities/show";
import { ShowDatabase } from "../../../data/showDatabase";

export default class GetShowsByDayUC {

    constructor(private databse: ShowDatabase) { }

    async execute(day: ShowWeekDay) {

       const shows = await this.databse.getShowsByDay(day)

       if(!shows) throw new Error("Não há shows para esse dia")

       return shows

    }
}

