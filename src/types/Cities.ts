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
  public readonly cities: City[];

  constructor(cities: City[]) {
    this.cities = cities;
  }

  public addFilterer(filterer: Filterer) {
    const existingFilterIndex = this.filtererChain.findIndex(
      (_filterer: Filterer) => _filterer.name === filterer.name
    );

    if (existingFilterIndex >= 0) {
      this.filtererChain.splice(existingFilterIndex, 1);
    }
    this.filtererChain.push(filterer);
  }

  public addSorter(sorter: Sorter) {
    const existingSorterIndex = this.sorterChain.findIndex(
      (_sorter: Sorter) => _sorter.name === sorter.name
    );

    if (existingSorterIndex >= 0) {
      this.sorterChain.splice(existingSorterIndex, 1);
    }
    this.sorterChain.push(sorter);
  }

  public sortCities(): City[] {
    let sortedCitiesList = this.cities;

    this.filtererChain.forEach((filterer: Filterer) => {
      sortedCitiesList = filterer.filter(sortedCitiesList);
    });

    this.sorterChain.forEach((sorter: Sorter) => {
      sortedCitiesList = sorter.sort(sortedCitiesList);
    });

    return sortedCitiesList;
  }
}
