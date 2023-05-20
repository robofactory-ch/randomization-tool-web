export class MarbleBag<T> {
  private elements;
  constructor(elements: T[]) {
    this.elements = elements;
  }

  draw(): T {
    // select random element, palce at end, remove
    const l = this.elements.length - 1;
    const i = rand(0, l);
    const e = this.elements[i];
    this.elements[i] = this.elements[l];

    this.elements = this.elements.slice(0, l);
    return e;
  }
}
export function rand(lowest: number, highest: number) {
  var adjustedHigh = highest - lowest + 1;
  return Math.floor(Math.random() * adjustedHigh) + lowest;
}
