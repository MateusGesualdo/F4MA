import { BaseDatabase } from "./baseDatabase";
import { BandGateway } from "../business/gateways/band";
import { Band } from "../business/entities/band";

export class BandDatabase extends BaseDatabase implements BandGateway {
  private bandTableName: string = "f4ma_bands";

  public fromDB(dbModel?: any): Band | undefined {
    return (
      dbModel &&
      new Band(
        dbModel.id,
        dbModel.name,
        dbModel.music_genre,
        dbModel.responsible
      )
    );
  }

  public async createBand(band: Band): Promise<void> {
    try {
      await this.connection.raw(`
        INSERT INTO ${this.bandTableName} (id, name, music_genre, responsible)
        VALUES(
          '${band.getId()}',
          '${band.getName()}',
          '${band.getMusicGenre()}',
          '${band.getResponsible()}'
        )
      `);
    } catch (err) {
      throw new Error(err.message)
    }
  }

  public async getBandById(id: string): Promise<Band | undefined> {
    try {
      const result = await this.connection.raw(`
        SELECT * FROM ${this.bandTableName}
        WHERE id = '${id}'
      `);
      return this.fromDB(result[0][0]);

    } catch (err) {
      throw new Error(err.message)
    }


  }

  public async getBandByName(name: string): Promise<Band | undefined> {
    try {
      const result = await this.connection.raw(`
      SELECT * FROM ${this.bandTableName}
      WHERE name LIKE '%${name}%'
    `);
      return this.fromDB(result[0][0]);

    } catch (err) {
      throw new Error(err.message)
    }
  }
}
