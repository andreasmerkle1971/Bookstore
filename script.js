function renderBooks() {
    const booksContainer = document.getElementById("book_list");
    if (!booksContainer) return;
    booksContainer.innerHTML = "";
    for (let index = 0; index < books.length; index++) {
        booksContainer.innerHTML += getNoteTemplate(index);
    }
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
    const book = books[index];
    const likeIcon = document.getElementById(`like-icon-${index}`);
    const currentLikes = document.getElementById(`like-count-${index}`);
    if (book.liked) {
        book.liked = false;
        book.likes--;
        likeIcon.src = "./assets/icons/dislike.svg";
    } else {
        book.liked = true;
        book.likes++;
        likeIcon.src = "./assets/icons/like.svg";
    }
    currentLikes.textContent = `likes: ${book.likes}`;
}

function addComment(event, index, triggerType) {
    if (
        triggerType === "click" ||
        (triggerType === "keydown" && event.key === "Enter")
    ) {
        const inputField = document.getElementById(`input-comment-${index}`);
        const commentText = inputField.value.trim();
        if (commentText !== "") {
            if (!Array.isArray(books[index].comments)) {
                books[index].comments = [];
            }
            books[index].comments.unshift({
                name: "Du",
                comment: commentText,
            });
            const commentsBox = document.getElementById(
                `comments-box-${index}`,
            );
            if (commentsBox) {
                commentsBox.innerHTML = books[index].comments
                    .map((c) =>`<p> <strong>${c.name}:</strong><br> ${c.comment}</p>`,)
                    .join("");
            }
            inputField.value = "";
        }
    }
}
