export interface HasSorters {
  sorterChain: Sorter[];
}

export interface ISorter {
  sort(products: any[]): any[];
}

export abstract class Sorter implements ISorter {
  constructor() {}

  abstract sort(products: any[]): any[];
}

export class NameSorter extends Sorter {
  constructor() {
    super();
  }

  public sort(products: any[]): any[] {
    // product.name
    return products;
  }
}
