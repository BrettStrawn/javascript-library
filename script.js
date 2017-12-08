// JS 101 - Your library must have a “books” property which must be an array. The array will contain book objects

// library constructor
var Library = function() {};

// Instaniate the library object
var lib = new Library();

// Create a new empty array for books
Library.prototype.arrBooks = [];


Library.prototype.addBook = function(book){
  if (book === undefined) {return false};

  var strTemp = book.title.trim().toLowerCase();

  if(this.arrBooks.length > 0) {
    for (var i = 0; i < this.arrBooks.length; i++) {
      if (this.arrBooks[i].title.toLowerCase().indexOf(strTemp) > -1){
        console.log('This book is already in the library!');
        return false;
      }
    }
  }

  this.arrBooks.push(book);
  return true;
};


Library.prototype.removeBookByTitle = function(title){
  if (title === undefined) {return false};

  var cntRemoved = 0;
  var strTemp = title.trim().toLowerCase();

  for (var i = this.arrBooks.length - 1; i >= 0; i--){
    if(this.arrBooks[i].title.toLowerCase() == strTemp) {
      this.arrBooks.splice([i], 1);
      cntRemoved++;
    };
  };

  console.log(cntRemoved + ' books were removed from library.');
  return cntRemoved > 0 ?  true : false;
};

Library.prototype.removeBookByAuthor = function(author){
  if (author === undefined) {return false};

  var cntRemoved = 0;
  var strTemp = author.trim().toLowerCase();

  for (var i = this.arrBooks.length - 1; i >= 0; i--) {
    if(this.arrBooks[i].author.toLowerCase() == strTemp) {
      this.arrBooks.splice([i], 1);
      cntRemoved++;
    };
  };

  console.log(cntRemoved + ' books were removed from library.');
  return cntRemoved > 0 ?  true : false;
};

Library.prototype.getRandomBook = function(){
  return this.arrBooks.length == 0 ? null : this.arrBooks[Math.floor(Math.random() * this.arrBooks.length)];
};

// Return an array of all books that completely or partially matches title.
Library.prototype.getBookByTitle = function(title){
  if (title === undefined) {return false};

  var strTemp = title.trim().toLowerCase();
  var arrTemp = new Array();

  for(var i = 0; i < this.arrBooks.length; i++){
    if(this.arrBooks[i].title.toLowerCase().indexOf(strTemp) > -1){
      arrTemp.push(this.arrBooks[i]);
    };
  };

  console.log(arrTemp.length + ' books found in library.');
  return arrTemp;
};

// Return an array of all books that completely or partially matches author.
Library.prototype.getBooksByAuthor = function(author){
  if (author === undefined) {return false};

  var strTemp = author.trim().toLowerCase();
  var arrTemp = new Array();

  for(var i = 0; i < this.arrBooks.length; i++) { //toLowerCase and includes...?  trim?
    if(this.arrBooks[i].author.toLowerCase().indexOf(strTemp) > -1){
      arrTemp.push(this.arrBooks[i]);
    };
  };

  console.log(arrTemp.length + ' books found in library.');
  return arrTemp;
};

// add an array of books
Library.prototype.addBooks = function(booksArray){
  if (booksArray === undefined) {return false};

  var arrTemp = new Array();

  for(var i = 0; i < booksArray.length; i++){
    if(this.addBook(booksArray[i])) {
      arrTemp.push(booksArray[i]);
    };
  };

  console.log(arrTemp.length + ' books added to the library.');
  return arrTemp;
};

// Return a distinct array of authors, empty array if no books exist or if no authors exist.
Library.prototype.getAuthors = function(){
  var arrDistinctAuthors = new Array();

  for(var i = 0; i < this.arrBooks.length; i++) {
    if(arrDistinctAuthors.indexOf(this.arrBooks[i].author) == -1){
      arrDistinctAuthors.push(this.arrBooks[i].author);
    };
  };

  return arrDistinctAuthors;
};

Library.prototype.getRandomAuthorName = function(){
  return this.arrBooks.length == 0 ? null : this.arrBooks[Math.floor(Math.random() * this.arrBooks.length)].author;
};

// add all books for initialization by book array
// console.log(lib.addBooks([gBook1,gBook2,gBook3,gBook4,gBook5,gBook6,gBook7,gBook8,gBook9,gBook10]));
//
// add all books for initialization by each book
// console.log(lib.addBook(gBook1));
// console.log(lib.addBook(gBook2));
// console.log(lib.addBook(gBook3));
// console.log(lib.addBook(gBook4));
// console.log(lib.addBook(gBook5));
// console.log(lib.addBook(gBook6));
// console.log(lib.addBook(gBook7));
// console.log(lib.addBook(gBook8));
// console.log(lib.addBook(gBook9));
// console.log(lib.addBook(gBook10));
