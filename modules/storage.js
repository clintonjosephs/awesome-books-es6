export default class storageManager {
  static storeData(booksData) {
    localStorage.setItem('bookData', JSON.stringify(booksData));
  }

  static getData = () => (localStorage.getItem('bookData') ? JSON.parse(localStorage.getItem('bookData')) : []);
}
