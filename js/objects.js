const bookList = [];
const addBtn = document.getElementById('add-btn');

function removeBook(book) {
  const bookIndex = bookList.indexOf(book);
  if (bookIndex !== -1) {
    bookList.splice(bookIndex, 1);
  }
}

function displayBook() {
  const bookListDiv = document.querySelector('.bookList');
  bookListDiv.innerHTML = '';
  bookList.forEach((book) => {
    const bookListItem1 = document.createElement('p');
    bookListItem1.textContent = `${book.bookTitle}`;
    bookListDiv.appendChild(bookListItem1);
    const bookListItem2 = document.createElement('p');
    bookListItem2.textContent = `${book.bookAuthor}`;
    bookListDiv.appendChild(bookListItem2);
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    bookListDiv.appendChild(removeBtn);
    const horizontalR = document.createElement('hr');
    bookListDiv.appendChild(horizontalR);
    removeBtn.addEventListener('click', () => {
      removeBook(book);
      displayBook();
    });
  });
}

function addBook() {
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  const book = { bookTitle: title.value, bookAuthor: author.value };
  bookList.push(book);
  displayBook();
}

addBtn.addEventListener('click', addBook);
