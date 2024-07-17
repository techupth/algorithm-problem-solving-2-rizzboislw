function findBookIndex(books, searchTitle) {
  let result = -1;
  let left = 0;
  let right = books.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (books[middle].title === searchTitle) {
      result = middle;
      break;
    } else if (books[middle].title < searchTitle) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return result;
}

let booksArray = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

console.log(findBookIndex(booksArray, "Gone with the Wind"));
console.log(findBookIndex(booksArray, "Catch-22"));
console.log(findBookIndex(booksArray, "The Master Mind"));

// Big O เป็น O(log n) เนื่องจากมีการใช้ Binary Search ในการค้นหา
