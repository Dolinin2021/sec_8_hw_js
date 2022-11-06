const book = document.querySelector('.book');
const fontSize = document.querySelectorAll('.font-size');

for(let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener('click', (event) => {
        for(let i = 0; i < fontSize.length; i++) {
            fontSize[i].classList.remove('font-size_active');
        }
        
        fontSize[i].classList.add('font-size_active');

        if (fontSize[i].classList.contains('font-size_small')) {
            if (book.classList.contains('book_fs-big')) {
                book.classList.remove('book_fs-big');
            }
            book.classList.add('book_fs-small');
            event.preventDefault();

        } else if (fontSize[i].classList.contains('font-size_big')) {
            if (book.classList.contains('book_fs-small')) {
                book.classList.remove('book_fs-small');
            }
            book.classList.add('book_fs-big');
            event.preventDefault();
        }
    });
}
