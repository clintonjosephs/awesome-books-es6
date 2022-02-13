/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Books from './modules/bookList.js';
import UpdateUI from './modules/manageui.js';
import luxon from './modules/date.js';
import Navigation from './modules/navigation.js';

const removeBtn = document.querySelector('.list_present');
const titleInput = document.querySelector('#book_title');
const authorInput = document.querySelector('#book_author');
const addBookBtn = document.querySelector('#add_book');
const addForm = document.querySelector('.addBookForm');
const bookList = document.querySelector('.list_present');
const msg = document.querySelector('.msg');

/* Navigation controls */
const listLink = document.querySelector('.list');
const addLink = document.querySelector('.add');
const contactLink = document.querySelector('.contact');
const listSection = document.querySelector('.bookListSection');
const addSection = document.querySelector('.addBookSection');
const contactSection = document.querySelector('.contactSection');
const getAllLinks = document.querySelectorAll('.nav-bar ul a');

/* Navigation controls end */

const dateContainer = document.querySelector('.todaysDate');
setInterval(() => {
  dateContainer.innerHTML = luxon();
}, 1000);

let localStorageData = JSON.parse(localStorage.getItem('bookData'));

if (localStorageData === null) {
  localStorageData = [];
}

const ulManager = new UpdateUI(bookList, localStorageData);
const booksBinding = new Books(localStorageData);
const navModule = new Navigation(
  listLink,
  addLink,
  contactLink,
  listSection,
  addSection,
  contactSection,
  getAllLinks,
);

function showMsg(status) {
  msg.style.display = 'block';
  if (status) {
    msg.textContent = 'Book added successfully!';
    msg.style.color = 'green';
  } else {
    msg.textContent = 'Please, fill-out book title and author';
    msg.style.color = 'red';
  }
 
  setTimeout(() => {
    msg.style.display = 'none';
  }, 4000);
}

function addBook() {
  const title = titleInput.value;
  const author = authorInput.value;
  if (title !== '' && author !== '') {
    booksBinding.add(title, author);
    ulManager.refreshUI();
    addForm.reset();
    showMsg(true);
  } else {
    showMsg(false)
  }
}

addBookBtn.addEventListener('click', addBook);
listLink.addEventListener('click', () => navModule.listClick());
addLink.addEventListener('click', () => navModule.addLinkClick());
contactLink.addEventListener('click', () => navModule.contactLinkClick());
removeBtn.addEventListener('click', (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName === 'I') {
    const bookId = event.target.id;
    booksBinding.remove(bookId);
    ulManager.refreshUI();
  }
});

window.onresize = ulManager.refreshUI();
