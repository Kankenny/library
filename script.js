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

let addButton = document.querySelector(".addButton")
let libraryHTML = document.querySelector(".cards")
let myLibrary = []

addButton.addEventListener('click', () => { 
    let form = document.createElement('form')
    form.setAttribute('class', 'card addForm')

    let labelTitle = createFormLabel('text', 'title', 'Title:')
    let inputTitle = createFormInput('text', 'title')
    let labelAuthor = createFormLabel('text', 'author', 'Author:')
    let inputAuthor = createFormInput('text', 'author')
    let labelPages = createFormLabel('number', 'pages', 'Pages:')
    let inputPages = createFormInput('number', 'pages')
    let labelIsRead = createFormLabel('checkbox', 'isRead', 'Is Read?:')
    let inputIsRead = createFormInput('checkbox', 'isRead')

    let bottomForm = document.createElement('div')
    bottomForm.setAttribute('class', 'bottomForm')
    bottomForm.appendChild(labelPages)
    bottomForm.appendChild(inputPages)
    bottomForm.appendChild(labelIsRead)
    bottomForm.appendChild(inputIsRead)

    let exitButton = document.createElement('i')
    exitButton.setAttribute('class', 'fa-solid fa-xmark formButtons exit')
    let createButton = document.createElement('i')
    createButton.setAttribute('class', 'fa-solid fa-plus formButtons create')

    form.appendChild(exitButton)
    form.appendChild(labelTitle)
    form.appendChild(inputTitle)
    form.appendChild(labelAuthor)
    form.appendChild(inputAuthor)
    form.appendChild(bottomForm)
    form.appendChild(createButton)

    libraryHTML.prepend(form)

    let createBookButton = document.querySelector('.create')
    let exitBookButton = document.querySelector('.exit')

    createBookButton.addEventListener('click', () => {
        let titleInput = (inputTitle.value != '') ? inputTitle.value : 'Unknown'
        let authorInput = (inputAuthor.value != '') ? inputAuthor.value : 'Anonymous'
        let pagesInput = (inputPages.value != '') ? inputPages.value : 'Invalid'
        let isReadInput = (inputIsRead.checked) ? 'Finished' : 'Unfinished'  

        let book = new Book(titleInput, authorInput, pagesInput, isReadInput)

        createBookElement(book)
        addBookToLibrary(book)
        libraryHTML.removeChild(form)
    })

    exitBookButton.addEventListener('click', () => {
        libraryHTML.removeChild(form)
    })
})

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
    let cardText = document.createElement("div")

    card.setAttribute('class', 'card')
    cardText.setAttribute('class', 'cardText')

    let titleElement = document.createElement('h3')
    let authorElement = document.createElement('h6')
    let pagesElement = document.createElement('h6')
    let isReadElement = document.createElement('h6')

    titleElement.textContent = `Title: ${book.title}`
    authorElement.textContent = `Author: ${book.author}`
    pagesElement.textContent = `Pages: ${book.pages}`
    isReadElement.textContent = `Status: ${book.isRead}`

    cardText.appendChild(titleElement)
    cardText.appendChild(authorElement)
    cardText.appendChild(pagesElement)
    cardText.appendChild(isReadElement)

    card.appendChild(cardText)

    libraryHTML.appendChild(card)
}

function renderBooks(){
    myLibrary.map(book => createBookElement(book))
}

function displayLibraryOverview(){
    myLibrary.forEach(book => console.log(book.title))
}

function createFormLabel(inputType, id, name){
    let label = document.createElement('label')
    label.textContent = name
    label.setAttribute('for', inputType)
    return label
}

function createFormInput(inputType, id){
    let input = document.createElement('input')
    input.setAttribute('type', inputType)
    input.setAttribute('id', id)
    return input
}

  
let theHobbit = new Book("The Hobbit", ".R.R. Tolkien", 295, "Finished")
let starwart = new Book("The 123bit", ".R.R. Tolkien", 295, "Unfinished")
let spongeboy = new Book("The333bt", ".R.R. Tolkien", 295, "Finished")
let teest = new Book("The Ho23b3bit", ".R.32R. Tolkien", 2395, "Finished")

addBookToLibrary(theHobbit)
addBookToLibrary(starwart)
addBookToLibrary(spongeboy)
addBookToLibrary(teest)
renderBooks()

displayLibraryOverview()