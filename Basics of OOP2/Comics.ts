import Item from "./Item";
import Pages from "./Pages";

class Comics extends Item {
  pages: Pages
  private _title: string;
  private _author: string;
  private _artist: string;

  constructor(title: string, author: string, artist: string, pages: Pages) {
    super();
    this._title = title;
    this._author = author;
    this._artist = artist;
    this.pages = pages;
  }

  set title(title: string) {
    this._title = title;
  }

  get title(): string {
    return this._title;
  }

  set author(author: string) {
    this._author = author;
  }

  get author(): string {
    return this._author;
  }

  set artist(artist: string) {
    this._artist = artist;
  }

  get artist(): string {
    return this._artist;
  }

  toString(): string {
    return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.length}`;
  }
}

export default Comics;
