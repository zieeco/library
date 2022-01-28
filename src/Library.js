export default class Library {
  constructor() {
    this.books = localStorage.getItem('myLibrary') ? JSON.parse(localStorage.getItem('myLibrary')) : [];
  }

  addBook(book) {
    this.books.push(book);
    localStorage.setItem('myLibrary', JSON.stringify(this.books));
  }

  remove(id) {
    this.books = this.books.filter((book) => {
      if (book.id === id) {
        return false;
      }
      return true;
    });
    localStorage.setItem('myLibrary', JSON.stringify(this.books));
  }

  toggleRead(id) {
    const currentBook = this.books.find((book) => book.id === id);
    currentBook.read = !currentBook.read;
    localStorage.setItem('myLibrary', JSON.stringify(this.books));
  }
}