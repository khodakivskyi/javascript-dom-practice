const articles = document.querySelectorAll('.article');

articles.forEach(article => {
    article.addEventListener('click', (e) => {
        if (e.target.classList.contains('editArticle')) {
            editArticle(article);
        }
        else if (e.target.classList.contains('deleteArticle')) {
            deleteArticle(article);
        }
    });
});

function editArticle(article) {
    const articleContent = article.querySelector('.article-content');
    articleContent.style.display = 'none';

    const textarea = document.createElement('textarea');
    textarea.value = articleContent.textContent.trim();
    article.appendChild(textarea);
    textarea.focus();

    function finishEdit() {
        if (textarea.value !== articleContent.textContent) {
            articleContent.textContent = textarea.value;
        }
        textarea.remove();
        articleContent.style.display = 'block';
        document.removeEventListener('click', handleOutsideClick);
    }

    function handleOutsideClick(event) {
        if (!textarea.contains(event.target) && event.target !== textarea) {
            finishEdit();
        }
    }

    textarea.addEventListener('focusout', finishEdit);
}

function deleteArticle(article) {
    article.remove();
}