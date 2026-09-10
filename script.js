function renderBooks() {
    const booksContainer = document.getElementById("book_list");
    if(!booksContainer) return;

    booksContainer.innerHTML = "";

    for (let index = 0; index < books.length; index++) {
        booksContainer.innerHTML += getNoteTemplate(index);
    }
}
function getNoteTemplate(index) {

const book = books[index];


console.table(book);

    return `<div class="books-gallery"><img src="./assets/img/${book.image}" alt="${book.name}" loading "lazy"></div>`;
}