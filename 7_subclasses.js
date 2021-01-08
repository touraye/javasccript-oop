class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} is written by ${this.author} in ${this.year}`;
    }   
}

// Paper Subclasses
class Paper extends Book{
    constructor ( title, author, year, month ) {
        super( title, author, year );

        this.month = month;
    }
}

// Instatiate Paper
const paperOne = new Paper( 'Labs101', 'Pa', '2020', 'Dec' );

console.log(paperOne.getSummary());
