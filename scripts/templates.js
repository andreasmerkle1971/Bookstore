function getNoteTemplate(index) {
    const book = books[index];
    const comments = Array.isArray(book.comments) && book.comments.length > 0
            ? book.comments.map((c) =>`<p> <strong>${c.name}:</strong><br> ${c.comment}</p>`,).join("")
            : book.comments;
    const formatierterPrice = formatPrice(book.price);
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
        <p>Kommentare: </p><div class="comments"  id="comments-box-${index}">${comments}</div>        
<div class="input-box">
        <input class="input-comment" id="input-comment-${index}" type="text" placeholder = "Dein Kommentar ..." onkeydown="addComment(event, ${index}, 'keydown')">
        <button type="button" onclick="addComment(event, ${index}, 'click')">senden</button>
</div>
    </div>
    `;
}