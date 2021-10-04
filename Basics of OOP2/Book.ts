import Item from "./Item";
import Pages from "./Pages";

class Book extends Item{ 
  pages: Pages;
  private _title: string;
  private _author: string;

  constructor(title: string, author: string, pages: Pages) {
    super();
    this._title = title;
    this._author = author;
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

  toString(): string {
    return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.length}`;
  }
}

export default Book;
