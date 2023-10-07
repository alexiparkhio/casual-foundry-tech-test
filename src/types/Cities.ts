import { Filterer, HasFilterers } from "./Filterers";
import { HasSorters, Sorter } from "./Sorters";
import { Weather, WeatherUnitsKey } from "./Weather";

export interface CityFromAPI {
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

export interface ICity {}

export class City implements ICity {
  public name: string;
  public continent: string;
  public active: boolean;
  public description: string;
  public image: string;
  public coords: Coordinates;
  public weatherByUnits: Record<WeatherUnitsKey, Weather>;

  constructor(
    cityFromAPI: CityFromAPI,
    weatherByUnits: Record<WeatherUnitsKey, Weather>
  ) {
    this.name = cityFromAPI.name;
    this.continent = cityFromAPI.continent;
    this.active = cityFromAPI.active;
    this.description = cityFromAPI.description;
    this.image = cityFromAPI.image;
    this.coords = cityFromAPI.coords;
    this.weatherByUnits = weatherByUnits;
  }
}

export interface ICities {
  sortCities(): City[];
}

export class Cities implements HasFilterers, HasSorters, ICities {
  public filtererChain: Filterer[] = [];
  public sorterChain: Sorter[] = [];
  public cities: City[];

  constructor(cities: City[]) {
    this.cities = cities;
  }

  public addFilter(filterer: Filterer) {
    if (
      !this.filtererChain.some(
        (_filterer: Filterer) => _filterer.name === filterer.name
      )
    ) {
      this.filtererChain.push(filterer);
    }
  }

  public addSorter(sorter: Sorter) {
    if (
      !this.sorterChain.some((_sorter: Sorter) => _sorter.name === sorter.name)
    ) {
      this.sorterChain.push(sorter);
    }
  }

  public sortCities(): City[] {
    const sortedCitiesList = this.cities;
    this.filtererChain.forEach((filterer: Filterer) => {
      filterer.filter(sortedCitiesList);
    });

    return sortedCitiesList;
  }
}
