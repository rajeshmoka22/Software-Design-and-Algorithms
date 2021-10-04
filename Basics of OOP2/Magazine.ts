import Item from "./Item";
import Pages from "./Pages";

class Magazine extends Item{
  pages: Pages
  private _title: string;

  constructor(title: string, pages: Pages) {
    super();
    this._title = title;
    this.pages = pages;
  }

  set title(title: string) {
    this._title = title;
  }

  get title(): string {
    return this._title;
  }

  toString(): string {
    return `Magazine: ${this.title} with number of pages: ${this.pages.length}`;
  }
}

export default Magazine;
