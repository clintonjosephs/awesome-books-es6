import storageManager from './storage.js';

export default class UpdateUI {
  constructor(listElement, listObj) {
    this.showBooksElement = listElement;
    this.booksData = listObj;
  }

  static createBookDisplay(book, empty = false) {
    const li = document.createElement('li');
    if (!empty) {
      li.innerHTML = `<p>
                          <span class="wrapText"> "${book.title}" by - <i><b>${book.author}</b></i> </span>
                            <input type="button" value="Remove" id="${book.id}" class="removeBook"/>
                          </p>`;
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
