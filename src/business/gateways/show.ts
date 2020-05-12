import { Show, ShowWithBand, ShowWeekDay } from "../entities/show";

export interface ShowGateway {
  createShow(show: Show): Promise<void>;
  getShowsByDay(day: ShowWeekDay): Promise<ShowWithBand[]>;
}
