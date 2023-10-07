export interface HasFilterers {
  filtererChain: Filterer[];
}

export type CityFilterers = "NAME" | "CONTINENT";

export interface IFilterer {
  filter(products: any[]): any[];
}

export abstract class Filterer implements IFilterer {
  readonly name: CityFilterers;
  constructor(name: CityFilterers) {
    this.name = name;
  }

  abstract filter(products: any[]): any[];
}

export class NameFilterer extends Filterer {
  constructor() {
    super("NAME");
  }

  public filter(products: any[]): any[] {
    // product.name
    return products;
  }
}

export class ContinentFilterer extends Filterer {
  constructor() {
    super("CONTINENT");
  }

  public filter(products: any[]): any[] {
    // product.name
    return products;
  }
}
