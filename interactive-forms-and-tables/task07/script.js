const form = document.querySelector("#commentForm");
const name = document.querySelector('#name');
const commentText = document.querySelector('#comment');
const commentsContainer = document.querySelector(".comments-container");

form.addEventListener("submit", addComment);

function addComment(event) {
    event.preventDefault();

    const comment = document.createElement("div");
    comment.classList.add("comment");

    const commentHeader = document.createElement("div");
    commentHeader.classList.add("comment-header");

    const commentOwner = document.createElement("span");
    commentOwner.innerText = name.value.trim();
    commentHeader.appendChild(commentOwner);

    const dateTime = document.createElement("span");
    const now = new Date();

    dateTime.innerText = now.toDateString() + "  " + now.toLocaleTimeString();
    commentHeader.appendChild(dateTime);

    comment.appendChild(commentHeader);

    const commentContent = document.createElement("div");
    commentContent.innerText = commentText.value;

    comment.appendChild(commentContent);
    commentsContainer.appendChild(comment);
}