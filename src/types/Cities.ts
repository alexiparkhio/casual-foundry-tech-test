import { Filter, HasFilters } from "./Filters";

export interface City {
  name: string;
  continent: string;
  active: boolean;
  description: string;
  image: string;
  coords: Coordinates;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface ICities {
  sortCities(): City[];
}

export class Cities implements HasFilters, ICities {
  public filterChain: Filter[] = [];
  public cities: City[];

  constructor(cities: City[]) {
    this.cities = cities;
  }

  public addFilter(filter: Filter) {
    this.filterChain.push(filter);
  }

  public sortCities(): City[] {
    const sortedCitiesList = this.cities;
    this.filterChain.forEach((filter: Filter) => {
      filter.filter(sortedCitiesList);
    });

    return sortedCitiesList;
  }
}
