// const myLibrary = [];

// function createBookElement(type, content, className){
//     const element = document.createElement(type);
//     element.setAttribute("class",  className);
//     return element;
// }

// function createBookItem(book, index){
//     const bookItem = document.createElement("div");
//     bookItem.setAttribute("id", index);
//     bookItem.setAttribute("key", index);
//     bookItem.setAttribute("class", "card book");

//     bookItem.appendChild(createBookElement("h1", `Title: ${book.title}`, "book-title"));
//     bookItem.appendChild(createBookElement("h3", `Author: ${book.author}`, "book-author"));
//     bookItem.appendChild(createBookElement("h3", `Pages: ${book.pages}`, "book-pages"));
//     bookItem.appendChild(createBookElement("h3", `Is Read?: ${book.isRead}`, "book-isRead"));
// }


// let theHobbit = new Book("The Hobbit", ".R.R. Tolkien", 295, "not read");
// myLibrary.add(theHobbit);

const libraryHTML = document.querySelector(".cards")
const myLibrary = []

function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages 
    this.isRead = isRead

    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${isRead}`
    }
}

function addBookToLibrary(book){
    if(myLibrary.includes(book.title)){
        return;
    }

    myLibrary.push(book)
}

function createBookElement(book){
    let card = document.createElement('div')
    card.setAttribute('class', 'card')

    let titleElement = document.createElement('h3')
    let authorElement = document.createElement('h5')
    let pagesElement = document.createElement('h5')
    let isReadElement = document.createElement('h5')

    titleElement.textContent = `Title: ${book.title}`
    authorElement.textContent = `Author: ${book.author}`
    pagesElement.textContent = `Pages: ${book.pages}`
    isReadElement.textContent = `Is Read: ${book.isRead}`

    card.appendChild(titleElement)
    card.appendChild(authorElement)
    card.appendChild(pagesElement)
    card.appendChild(isReadElement)

    libraryHTML.appendChild(card)
}

function renderBooks(){
    myLibrary.map(book => createBookElement(book))
}

function displayLibraryOverview(){
    myLibrary.forEach(book => console.log(book.title))
}
  

let theHobbit = new Book("The Hobbit", ".R.R. Tolkien", 295, "not read")
let starwart = new Book("The 123bit", ".R.R. Tolkien", 295, "not read")
let spongeboy = new Book("The333bt", ".R.R. Tolkien", 295, "not read")
let test = new Book("The Hobbit", ".R.R. Tolkien", 295, "not read")

addBookToLibrary(theHobbit)
addBookToLibrary(starwart)
addBookToLibrary(spongeboy)

displayLibraryOverview();
renderBooks();