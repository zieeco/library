import Book from './book.js';
import displayBooks from './display.js';
document.getElementById('add').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('hidden');
});

document.querySelector('.modal-close').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});

const submitBtn = document.getElementById('modal-submit');
let myLibrary = [];

const printErrorMsg = (message) => {
  document.querySelector('.err-msg').innerHTML = message;
  setTimeout(() => {
    document.querySelector('.err-msg').innerHTML = '';
  }, 2000);
};

const clearBookForm = () => {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;
};

const saveToLocalStorage = (book) => {
  myLibrary = [];
  if (localStorage.getItem('myLibrary') === null) {
    myLibrary = [];
  } else {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  }
  myLibrary.push(book);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
};

const addBookToMyLibrary = (book) => {
  myLibrary.push(book);
  saveToLocalStorage(book);
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const capitalizeEachLetter = (string) =>
    string
      .toLowerCase()
      .split(' ')
      .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join(' ');
  if (title === '' || author === '') {
    printErrorMsg('Please fill all the fields');
  } else if (pages === '' || pages <= 0) {
    printErrorMsg('Please enter a valid number for pages');
  } else {
    const book = new Book(
      capitalizeEachLetter(title),
      capitalizeEachLetter(author),
      pages,
      read
    );
    addBookToMyLibrary(book);
    clearBookForm();
    displayBooks(book);
    document.getElementById('modal').classList.add('hidden');
  }
});

document.addEventListener('DOMContentLoaded', displayBooks);
