const render = (library) => {
  const bookList = document.querySelector('.book-list');
  bookList.innerHTML = `<p>You have read: ${library.books.filter((b) => b.read).length}</p>
  <p>Total books: ${library.books.length}</p>`;

  library.books.forEach((book) => {
    bookList.innerHTML += `<li class="book bg-white d-flex-2" id="${book.id}">
    <div class='d-flex-2 gap-4 w100'>
      <h2 class="ff-2 color-primary mb-4">
      <q class="ff-2">${book.title}</q></h2>
      <p class="ff-2 mb-4">${book.author}</p>
      <p class="ff-2 mb-16">${book.pages}</p>
    </div>
    <div class='ed-del-wr d-flex-2 w100'>
      <button id='${book.id}' class='btn btn-primary w100 assets-color bg-pri-btn readBtn' type='button'>
        ${book.read ? '<i class="fas fa-check green"></i>' : 'Not read yet!'}
      </button>
      <button id='${book.id}' class='b-btn btn-primary w100 assets-color bg-pri-btn deleteBtn' type='button'>
        <i class='fas fa-trash-alt'></i>
      </button>
    </div>
    </li>`;
  });
  // the eventListeners to be added here.... Don't forget!

  document.querySelectorAll('.readBtn').forEach((readBtn) => {
    readBtn.addEventListener('click', () => {
      library.toggleRead(+readBtn.id);
      render(library);
    });
  });

  document.querySelectorAll('.deleteBtn').forEach((delBtn) => {
    delBtn.addEventListener('click', () => {
      library.remove(+delBtn.id);
      render(library);
    });
  });
};

export default render;
