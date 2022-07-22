let addButton = document.querySelector(".addButton")
let libraryHTML = document.querySelector(".cards")
let myLibrary = []
let bookIndex = 0

addButton.addEventListener('click', () => { 
    if(libraryHTML.firstChild == document.querySelector('.addForm')){
        return;
    }

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

        if(!addBookToLibrary(book)){
            return
        }
        
        createBookElement(book, bookIndex)
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
    this.bookIndex = bookIndex

    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${isRead}`
    }
}

function addBookToLibrary(book){
    if (myLibrary.some(existingBook => existingBook.title === book.title)) {
        alert("Book already exists in the library!")
        return false
      }
      
    bookIndex++
    myLibrary.push(book)
    return true
}

function createBookElement(book, bookIndex){
    let card = document.createElement('div')
    let cardText = document.createElement("div")

    card.setAttribute('class', 'card')
    card.setAttribute('id', book.title)
    cardText.setAttribute('class', 'cardText')

    let titleElement = document.createElement('h3')
    let authorElement = document.createElement('h6')
    let pagesElement = document.createElement('h6')
    let isReadElement = document.createElement('h6')

    let editButton = document.createElement('i')
    let deleteButton = document.createElement('i')
    editButton.setAttribute('class', 'fa-solid fa-pen-to-square')
    deleteButton.setAttribute('class', 'fa-solid fa-delete-left')
    let createBookButtons = document.createElement('div')
    createBookButtons.setAttribute('class', 'cardActions')
    createBookButtons.appendChild(editButton)
    createBookButtons.appendChild(deleteButton)

    titleElement.textContent = `Title: ${book.title}`
    authorElement.textContent = `Author: ${book.author}`
    pagesElement.textContent = `Pages: ${book.pages}`
    isReadElement.textContent = `Status: ${book.isRead}`

    isReadElement.setAttribute('id', `${book.title} edit`)

    cardText.appendChild(titleElement)
    cardText.appendChild(authorElement)
    cardText.appendChild(pagesElement)
    cardText.appendChild(isReadElement)

    card.appendChild(cardText)
    card.append(createBookButtons)

    editButton.setAttribute('id', book.title)
    deleteButton.setAttribute('id', book.title)


    editButton.addEventListener('click', (e) => {
        let cardIsRead = document.getElementById(`${e.target.id} edit`)
        cardIsRead.textContent = (cardIsRead.textContent === "Status: Finished")
         ? "Status: Unfinished" : "Status: Finished"
    })

    deleteButton.addEventListener('click', (e) => {
        removeBookFromLibrary(e.target.id)
        myLibrary.splice(e.target.index, 1)    
    })

    libraryHTML.appendChild(card)
}

function removeBookFromLibrary(id){
    document.getElementById(id).outerHTML = "";
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
