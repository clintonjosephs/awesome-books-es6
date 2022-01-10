export default class storageManager {
  static storeData(booksData) {
    localStorage.setItem('bookData', JSON.stringify(booksData));
  }

  static getData() {
    return JSON.parse(localStorage.getItem('bookData'));
  }
}
