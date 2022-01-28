import Library from './Library.js';
import render from './render.js';
import Book from './book.js';

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

const library = new Library();

document.querySelector('#add').addEventListener('click', () => {
  document.querySelector('#modal').classList.remove('hidden');
});

document.querySelector('.modal-close').addEventListener('click', () => {
  document.querySelector('#modal').classList.add('hidden');
});

const submitBtn = document.querySelector('#modal-submit');

const printErrorMsg = (message) => {
  document.querySelector('.err-msg').innerHTML = message;
  setTimeout(() => {
    document.querySelector('.err-msg').innerHTML = '';
  }, 2000);
};

const clearBookForm = () => {
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const capitalizeEachLetter = (string) => string
    .toLowerCase()
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');
  if (title.value === '' || author.value === '') {
    printErrorMsg('Please fill all the fields');
  } else if (pages.value === '' || pages.value <= 0) {
    printErrorMsg('Please enter a valid number for pages');
  } else {
    const book = new Book(
      capitalizeEachLetter(title.value),
      capitalizeEachLetter(author.value),
      pages.value,
      read.checked,
    );
    library.addBook(book);
    clearBookForm();
    render(library);
    document.querySelector('#modal').classList.add('hidden');
  }
});

document.addEventListener('DOMContentLoaded', render(library));
git branch -m <oldname> <newname> # Any Branch
