class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} is written by ${this.author} in ${this.year}`;
    }

    getAge() {
        let years = new Date().getFullYear() - this.year;
         return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static bigBook() {
        return 'The Big Java'
    }
}

// instatiate Book
const book1 = new Book( 'java101', 'Mr Touray', '2018' );
console.log( book1.getSummary() );
book1.revise( '2020' );
console.log( book1.getAge() );

console.log(Book.bigBook());