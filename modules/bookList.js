/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import storageManager from './storage.js';

export default class Books {
  constructor(listObj) {
    this.bookList = listObj;
  }

  add(title, author) {
    const bookId = Math.random().toString(36).slice(2);
    this.bookList.unshift({
      id: bookId,
      title,
      author,
    });
    storageManager.storeData(this.bookList);
  }

  remove(bookId) {
    this.bookList = this.bookList.filter((books) => books.id !== bookId);
    storageManager.storeData(this.bookList);
  }
}
