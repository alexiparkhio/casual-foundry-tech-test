import { City, Coordinates } from "./Cities";

export interface HasSorters {
  sorterChain: Sorter[];
}

export type CitySorters = "NAME" | "DISTANCE";

export interface ISorter<T> {
  sort(products: T[]): T[];
}

export abstract class Sorter implements ISorter<City> {
  readonly name: CitySorters;
  constructor(name: CitySorters) {
    this.name = name;
  }

  abstract sort(cities: City[]): City[];
}

export class NameSorter extends Sorter {
  constructor() {
    super("NAME");
  }

  public sort(cities: City[]): City[] {
    return cities.sort((a: City, b: City) => {
      const nameA = a.name.toLowerCase(); // ignore upper and lowercase
      const nameB = b.name.toLowerCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }
}
export class DistanceSorter extends Sorter {
  readonly coords: Coordinates;

  constructor(lat: number, lng: number) {
    super("DISTANCE");

    this.coords = {
      lat,
      lng,
    };
  }

  public sort(cities: City[]): City[] {
    return cities.sort((a: City, b: City) => {
      return (
        this.calculateDistance(
          a.coords.lat,
          a.coords.lng,
          this.coords.lat,
          this.coords.lng
        ) -
        this.calculateDistance(
          b.coords.lat,
          b.coords.lng,
          this.coords.lat,
          this.coords.lng
        )
      );
    });
  }

  private calculateDistance(
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ): number {
    const R = 6371; // km
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lng2 - lng1);
    const radLat1 = this.toRad(lat1);
    const radLat2 = this.toRad(lat2);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) *
        Math.sin(dLon / 2) *
        Math.cos(radLat1) *
        Math.cos(radLat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  }

  private toRad(value: number) {
    return (value * Math.PI) / 180;
  }
}
