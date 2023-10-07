export interface HasSorters {
  sorterChain: Sorter[];
}

export type CitySorters = "TEMPERATURE_UNITS" | "NAME" | "DISTANCE";

export interface ISorter {
  sort(products: any[]): any[];
}

export abstract class Sorter implements ISorter {
  readonly name: CitySorters;
  constructor(name: CitySorters) {
    this.name = name;
  }

  abstract sort(products: any[]): any[];
}

export class TemperatureUnitsSorter extends Sorter {
  constructor() {
    super("TEMPERATURE_UNITS");
  }

  public sort(products: any[]): any[] {
    // product.name
    return products;
  }
}

export class NameSorter extends Sorter {
  constructor() {
    super("NAME");
  }

  public sort(products: any[]): any[] {
    // product.name
    return products;
  }
}
export class DistanceSorter extends Sorter {
  constructor() {
    super("DISTANCE");
  }

  public sort(products: any[]): any[] {
    // product.name
    return products;
  }
}
