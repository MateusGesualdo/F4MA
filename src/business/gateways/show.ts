import { Show, ShowWithBand, ShowWeekDay } from "../entities/show";

export interface ShowGateway {
  createShow(show: Show): Promise<void>;
  getShowWithBandByTimeRange(
    startTime: number,
    endTime: number,
    weekDay: ShowWeekDay
  ): Promise<ShowWithBand[]>;
  getShowsByDay(day: ShowWeekDay): Promise<ShowWithBand[]>;
}
