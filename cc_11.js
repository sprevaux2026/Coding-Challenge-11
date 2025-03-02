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
