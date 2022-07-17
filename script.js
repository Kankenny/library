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
    if(!myLibrary.includes(book.title))
        myLibrary.push(book)
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