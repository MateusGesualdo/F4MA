import { Band } from "./band";

export class Show {
  constructor(
    private id: string,
    private weekDate: ShowWeekDay,
    private startTime: number,
    private endTime: number,
    private bandId: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getWeekDate(): ShowWeekDay {
    return this.weekDate;
  }

  public getStartTime(): number {
    return this.startTime;
  }

  public getEndTime(): number {
    return this.endTime;
  }

  public getBandId(): string {
    return this.bandId;
  }
}

export class ShowWithBand extends Show {
  constructor(
    id: string,
    weekDate: ShowWeekDay,
    startTime: number,
    endTime: number,
    private band: Band
  ) {
    super(id, weekDate, startTime, endTime, band.getId());
  }

  public getBand(): Band {
    return this.band;
  }
}

export enum ShowWeekDay {
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

export const toShowWeekDay = (input: string): ShowWeekDay => {
  switch (input.toUpperCase()) {
    case "FRIDAY":
      return ShowWeekDay.FRIDAY;
    case "SATURDAY":
      return ShowWeekDay.SATURDAY;
    case "SUNDAY":
      return ShowWeekDay.SUNDAY;
    default:
      throw new Error("Invalid Week Day");
  }
};
