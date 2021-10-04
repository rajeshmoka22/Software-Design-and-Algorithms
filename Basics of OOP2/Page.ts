type PageMaterial = 'glossy paper' | 'simple paper' | 'paper'; // added 'paper' to match page.spec.ts
type PageType = 'with images' | 'with article' | 'with some content' | 'with text'; // added 'with some content' to match page.spec.ts


type PageMaterial = 'glossy paper' | 'simple paper' | 'paper'; // added 'paper' to match page.spec.ts
type PageType = 'with images' | 'with article' | 'with some content' | 'with text'; // added 'with some content' to match page.spec.ts

class Page {
  pageNumber: number;
  pageType: PageType;
  pageMaterial: PageMaterial;

  constructor(pageNumber: number, pageType: PageType, pageMaterial: PageMaterial) {
    this.pageNumber = pageNumber;
    this.pageType = pageType;
    this.pageMaterial = pageMaterial;
  }

  toString() {
    return `here is page ${this.pageType} #${this.pageNumber} and it's material is ${this.pageMaterial}`;
  }
}

export default Page;
