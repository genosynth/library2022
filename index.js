let myLibrary = [];

function Book(title,author,pages,read=false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  window.alert("orrajt")
}

function openAddBox(){
    document.getElementById("addBookBox").style.visibility="visible"
}

let book1 = new Book("fightclub","chuck",10)
console.log(book1)