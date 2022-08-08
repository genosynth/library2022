let myLibrary = [];
if (localStorage.getItem("library")){
    myLibrary = JSON.parse(localStorage.getItem("library"))
}



function Book(title,author,pages,read=false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {

  let title = document.getElementById("title")
  let author = document.getElementById("author")
  let pages = document.getElementById("pages")
  let book = new Book(title.value,author.value,pages.value)

  if (!title.value || !author.value || !pages.value){
    return alert("Please enter all fields!")
  }

  title.value = ''
  author.value = ''
  pages.value = ''
  myLibrary.push(book)
  document.getElementsByClassName("library-opaque")[0].className = "library"
  document.getElementById("addBookBox").style.visibility="hidden"
  localStorage.setItem('library', JSON.stringify(myLibrary));
  loadDOMLibrary()
}

function openAddBox(){
    document.getElementById("addBookBox").style.visibility="visible"
    document.getElementsByClassName("library")[0].className = "library-opaque"
   document.getElementById("close").addEventListener("click", ()=>{
    document.getElementsByClassName("library-opaque")[0].className = "library"
  document.getElementById("addBookBox").style.visibility="hidden"
  loadDOMLibrary()
   })
}

function loadDOMLibrary(){
  
  let library = document.getElementsByClassName("library")[0]
  library.innerText= " "
  
  for (let i = 0; i < myLibrary.length; i++) {
    const title = document.createElement("h2")
    const author = document.createElement("h3")
    const pages = document.createElement("h4")
    const readBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")
    const cardDiv = document.createElement("div")

    cardDiv.className = "book"
    title.innerText = myLibrary[i].title;
    author.innerText = myLibrary[i].author;
    pages.innerText = `${myLibrary[i].pages} pages ` ;

    if (myLibrary[i].read){
      readBtn.innerText =  "Read";
      readBtn.className = "btn btn-success";
    } else {
        readBtn.innerText = "Unread"
        readBtn.className = "btn btn-light";
    }
    
    
    readBtn.addEventListener("click", ()=>{
     if (myLibrary[i].read){
      myLibrary[i].read = false
     } else {
      myLibrary[i].read = true
     }
     if (myLibrary[i].read){
      readBtn.innerText =  "Read";
      readBtn.className = "btn btn-success";
    } else {
        readBtn.innerText = "Unread"
        readBtn.className = "btn btn-light";
    }

    localStorage.setItem('library', JSON.stringify(myLibrary));


    })
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-danger";
    deleteBtn.addEventListener("click", ()=>{
     
      myLibrary.splice(i,1);
      localStorage.setItem('library', JSON.stringify(myLibrary));
      loadDOMLibrary()
    })

    cardDiv.appendChild(title)
    cardDiv.appendChild(author)
    cardDiv.appendChild(pages)
    cardDiv.appendChild(readBtn)
    cardDiv.appendChild(deleteBtn)

    library.appendChild(cardDiv)

  }
}

loadDOMLibrary()