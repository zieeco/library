document.getElementById('add').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('hidden');
});

document.querySelector('.modal-close').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});

const bookList = document.getElementById('book-list');
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

class Book {
  constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const displayBooks = () => {
  if (localStorage.getItem('myLibrary') === null) {
    myLibrary = [];
  } else {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  }
  let display = '';
  myLibrary.forEach((book, index) => {
    display += `<li class="book bg-white d-flex-2" id="${index}">
    <div class='d-flex-2 gap-4 w100'>
      <h2 class="ff-2 color-primary mb-4">
      <q class="ff-2">${book.title}</q></h2>
      <p class="ff-2 mb-4">${book.author}</p>
      <p class="ff-2 mb-16">${book.pages}</p>
    </div>
    <div class='ed-del-wr d-flex-2 w100'>
      <button id='${index}' class='btn btn-primary w100 assets-color bg-pri-btn readBtn' type='button'>
        ${book.read ? '<i class="fas fa-check green"></i>'
    : 'Not read yet!'}
      </button>
      <button id='${index}' class='b-btn btn-primary w100 assets-color bg-pri-btn deleteBtn' type='button'>
        <i class='fas fa-trash-alt'></i>
      </button>
    </div>
    </li>`;
  });
  bookList.innerHTML = display;
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
  const capitalizeEachLetter = (string) => string.toLowerCase().split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
  if (title === '' || author === '') {
    printErrorMsg('Please fill all the fields');
  } else if ((pages === '') || (pages <= 0)) {
    printErrorMsg('Please enter a valid number for pages');
  } else {
    const book = new Book(capitalizeEachLetter(title), capitalizeEachLetter(author), pages, read);
    addBookToMyLibrary(book);
    clearBookForm();
    displayBooks();
    document.getElementById('modal').classList.add('hidden');
  }
});

document.addEventListener('DOMContentLoaded', displayBooks);