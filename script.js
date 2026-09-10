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
console.log("Aktuelles Buch-Objekt:", book);


console.table(book);

    return `
    <div class="card">
    <div class="books-gallery"><h2>${book.name}</h2></div>
    <div class="books-gallery">Author: ${book.author}</div>
    
    <div class="books-gallery"><img src="./assets/img/${book.image}" alt="${book.name}" loading = "lazy"></div>
    <div class="books-gallery">likes: ${book.likes}</div>
    <div class="books-gallery">liked: ${book.liked}</div>
    <div class="books-gallery">Preis: ${book.price}</div>
    <div class="books-gallery">Veröffentlichungsjahr: ${book.publishedYear}</div>
    <div class="books-gallery">Genre: ${book.genre}</div>
    <div >Kommentare: ${book.comments}</div>
    
    </div>
    `;
}