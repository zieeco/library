export default class Book {
  constructor(title, author, pages, read = false) {
    this.id = Date.now();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
