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

<div class="like"> <span id="like-count-${index}">likes: ${book.likes} </span> 
<img id="like-icon-${index}" src="${book.liked ? "./assets/icons/like.svg" : "./assets/icons/dislike.svg"}" alt="like Bild" 
onclick="likeDislikeToggle(${index})"></div>
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

// document.addEventListener("DOMContentLoaded", () => {
//     let likeIcon = document.getElementById("like-icon");
//     let currentLikes = document.getElementById("like-count-0");

//     console.log(likeIcon);
//     console.log(currentLikes.textContent);
// });
// // document.addEventListener('DOMContentLoaded', () => {
// //     let likeIcon = document.getElementById('like-icon');
// //     let currentLikes = document.getElementById('like-count-0');

// //     // Prüfen, ob BEIDE Elemente auf der aktuellen Seite existieren
// //     if (likeIcon && currentLikes) {
// //         console.log(likeIcon);
// //         console.log(currentLikes.textContent);
// //     } else {
// //         console.log("Like-Elemente wurden auf dieser Seite nicht gefunden.");
// //     }
// // });

function likeDislikeToggle(index) {
    const book = books[index];

    const likeIcon = document.getElementById(`like-icon-${index}`);
    const currentLikes = document.getElementById(`like-count-${index}`);

    console.log(likeIcon);
    console.log(currentLikes);


    if (book.liked) {
        book.liked = false;
        book.likes --;
        likeIcon.src = "./assets/icons/dislike.svg";
    } else {
        book.liked = true;
        book.likes ++;
        likeIcon.src = "./assets/icons/like.svg";
        }
        currentLikes.textContent = `likes: ${book.likes}`;
}

