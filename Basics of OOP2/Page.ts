type PageMaterial = 'glossy paper' | 'simple paper' | 'paper'; // added 'paper' to match page.spec.ts
type PageType = 'with images' | 'with article' | 'with some content' | 'with text'; // added 'with some content' to match page.spec.ts

class Page {
  pageNumber: number;
  pageType: string;
  pageMaterial: string;

  constructor(pageNumber: number, pageType: string, pageMaterial: string) {
    this.pageNumber = pageNumber;
    this.pageType = pageType;
    this.pageMaterial = pageMaterial;
  }

  toString() {
    return `here is page ${this.pageType} #${this.pageNumber} and it's material is ${this.pageMaterial}`;
  }
}

export default Page;
