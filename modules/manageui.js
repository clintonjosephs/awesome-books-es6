import storageManager from './storage.js';

export default class UpdateUI {
  constructor(listElement, listObj) {
    this.showBooksElement = listElement;
    this.booksData = listObj;
  }

  static createBookDisplay(book, empty = false) {
    const li = document.createElement('li');
    if (!empty) {
      li.innerHTML = `<div class="pstyle">
                          <span class="wrapText"> "${book.title}" by - <span style="color: #72a0c1">${book.author}</span> </span>
                          <i class="fa fa-trash removeBook" id="${book.id}"></i> 
                          </div>`;
    } else {
      li.innerHTML = '<h3>No books available</h3>';
    }
    return li;
  }

  refreshUI() {
    this.booksData = storageManager.getData();
    while (this.showBooksElement.firstChild) {
      this.showBooksElement.removeChild(this.showBooksElement.firstChild);
    }

    if (this.booksData.length > 0) {
      this.booksData.forEach((book) => {
        this.showBooksElement.appendChild(UpdateUI.createBookDisplay(book));
      });
    } else {
      this.showBooksElement.appendChild(UpdateUI.createBookDisplay({}, true));
    }
  }
}
