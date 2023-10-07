export interface HasFilters {
  filterChain: Filter[];
}

export interface IFilter {
  filter(products: any[]): any[];
}

export abstract class Filter implements IFilter {
  constructor() {}

  abstract filter(products: any[]): any[];
}

export class NameFilter extends Filter {
  constructor() {
    super();
  }

  public filter(products: any[]): any[] {
    // product.name
    return products;
  }
}
