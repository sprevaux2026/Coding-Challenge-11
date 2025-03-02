// Task 1 - Created Book Class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    updateCopies(quantity) {
        this.copies += quantity;
    }
}

// Test Case 1
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
book1.updateCopies(-1);
console.log(book1.getDetails());

// Task 2 - Created Borrower Class
class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }

    borrowBook(bookTitle) {
        this.borrowedBooks.push(bookTitle);
    }

    returnBook(bookTitle) {
        const index = this.borrowedBooks.indexOf(bookTitle);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        } else {
            console.log(`The book "${bookTitle}" was not borrowed by this user.`);
        }
    }
}

// Test Case 2
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

// Task 3 - Created Library Class
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }
}

// Test Case 3
const library = new Library();
library.addBook(book1);
library.listBooks();

// Task 4 - Implemented Book Borrowing
Library.prototype.lendBook = function (borrowerId, isbn) {
    let book = this.books.find(bk => bk.isbn === isbn);
    let borrower = this.borrowers.find(br => br.borrowerId === borrowerId);
    
    if (!book) {
        console.log(`No book found with ISBN: ${isbn}!`);
        return;
    }
    if (!borrower) {
        console.log(`No borrower found with ID: ${borrowerId}!`);
        return;
    }
    if (book.copies > 0) {
        book.updateCopies(-1);
        borrower.borrowBook(book.title);
        console.log("Book borrowed successfully.");
    } else {
        console.log(`No copies of ${book.title} available!`);
    }
};

// Test Case 4
library.borrowers.push(borrower1);
library.lendBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);

// Task 5 - Implemented Book Returns
Library.prototype.returnBook = function (borrowerId, isbn) {
    let book = this.books.find(bk => bk.isbn === isbn);
    let borrower = this.borrowers.find(br => br.borrowerId === borrowerId);
    
    if (!book) {
        console.log(`No book found with ISBN: ${isbn}!`);
        return;
    }
    if (!borrower) {
        console.log(`No borrower found with ID: ${borrowerId}!`);
        return;
    }
    if (borrower.borrowedBooks.includes(book.title)) {
        book.updateCopies(1);
        borrower.returnBook(book.title);
        console.log("Book returned successfully.");
    } else {
        console.log("This borrower did not borrow this book.");
    }
};

// Test Case 5
library.returnBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);
