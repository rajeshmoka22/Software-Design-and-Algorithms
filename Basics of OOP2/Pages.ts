import Page from "./Page";

class Pages {
  pages: Array<Page> = [];

  constructor(pages: Array<Page>){
    this.pages = pages;
  }

  get length(): number {
    return this.pages.length;
  }

}

export default Pages;
