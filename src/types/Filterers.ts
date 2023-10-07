import { City } from "./Cities";

export interface HasFilterers {
  filtererChain: Filterer[];
}

export type CityFilterers = "NAME" | "CONTINENT";

export interface IFilterer<T> {
  filter(array: T[]): T[];
}

export abstract class Filterer implements IFilterer<City> {
  readonly name: CityFilterers;
  constructor(name: CityFilterers) {
    this.name = name;
  }

  abstract filter(cities: City[]): City[];
}

export class NameFilterer extends Filterer {
  private param: string;

  constructor(param: string) {
    super("NAME");

    this.param = param;
  }

  public filter(cities: City[]): City[] {
    if (!this.param.length) {
      return cities;
    }

    return cities.filter((city: City) =>
      city.name.toLowerCase().includes(this.param.toLowerCase())
    );
  }
}

export class ContinentFilterer extends Filterer {
  private continent: string;

  constructor(continent: string) {
    super("CONTINENT");

    this.continent = continent;
  }

  public filter(cities: City[]): City[] {
    if (!this.continent.length) {
      return cities;
    }
    return cities.filter((city: City) => city.continent === this.continent);
  }
}
