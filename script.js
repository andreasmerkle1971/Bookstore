function renderBooks() {
    const booksContainer = document.getElementById("book_list");
    if (!booksContainer) return;

    booksContainer.innerHTML = "";

    for (let index = 0; index < books.length; index++) {
        booksContainer.innerHTML += getNoteTemplate(index);
    }
}
function getNoteTemplate(index) {
    const book = books[index];
    console.log("Aktuelles Buch-Objekt:", book);

    const formatierterPrice = formatPrice(book.price);
    console.table(book);

    return `
    <div class="card">
        <div class="books-gallery"><h2>${book.name}</h2></div>
        <div class="books-gallery">Author: ${book.author}</div>
        <div class="books-gallery"><img src="./assets/img/${book.image}" alt="${book.name}" loading = "lazy"></div>
<div>

<div class="like"> likes: ${book.likes}  <img id="${book.liked './assets/icons/like.svg' : './assets/icons/dislike.svg'}" alt="like Bild"></div>
</div>
        <div id="price" class="books-gallery">Preis: ${formatierterPrice}</div>
        <div class="books-gallery">Veröffentlichungsjahr: ${book.publishedYear}</div>
        <div class="books-gallery">Genre: ${book.genre}</div>
        <div class="comments">Kommentare: ${book.comments}</div>
        <input id="input-comment" type="text" placeholder = " Schreibe Deinen Kommentar">
    </div>
    `;
}
function formatPrice(price) {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);
}

function likeDislikeToggle(index) {
    book.liked[index] = !book.liked[index];

    const heartElement = document.getElementById(`heart-element-${index}`);

    if (book.liked[index]) {
        heartElement.src = "./assets/icons/like.svg";
    } else {
        heartElement.src = "./assets/icons/dislike.svg";
    }

    // <img id="heart-icon-0" src="./assets/icons/dislike.svg" onclick="likeDislikeToggle(0)">
    // <img id="heart-icon-1" src="./assets/icons/dislike.svg" onclick="likeDislikeToggle(1)">
}

