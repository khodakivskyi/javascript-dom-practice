const lines = document.querySelector('.lines');

const books = [
    "«Володар кілець» Джон Р. Р. Толкін",
    "«Гордість і упередження» Джейн Остін",
    "«Темні початки» Філіп Пулман",
    "«Автостопом по галактиці» Дуглас Адамс",
    "«Гаррі Поттер і Кубок вогню» Джоан Роулінг",
    "«Вбити пересмішника» Харпер Лі"
];

books.forEach((book, index) => {
    const bookLine = document.createElement("div");
    const bookName = document.createElement("span");
    bookName.innerText = book;
    bookName.classList.add("book");
    const num = document.createElement("span");
    num.innerText = `${index + 1}`;
    bookLine.append(num);
    bookLine.append(bookName);
    lines.appendChild(bookLine);
})

lines.addEventListener('click', e => {
    if (e.target.classList.contains('book')) {
        document.querySelectorAll('.book').forEach(book => {
            book.classList.remove('active');
        });

        e.target.classList.add('active');
    }
})