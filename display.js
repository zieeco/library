let myLibrary = [];
const bookList = document.getElementById('book-list');

const displayBooks = (book) => {
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
        ${book.read ? '<i class="fas fa-check green"></i>' : 'Not read yet!'}
      </button>
      <button id='${index}' class='b-btn btn-primary w100 assets-color bg-pri-btn deleteBtn' type='button'>
        <i class='fas fa-trash-alt'></i>
      </button>
    </div>
    </li>`;
  });
  bookList.innerHTML = display;
};
export default displayBooks;
