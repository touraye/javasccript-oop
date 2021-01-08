// Contructor
function Book( title, author, year ) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} is written by ${this.author} in ${this.year}`;
    }
}

// Instatiate an Object
const book1 = new Book( 'Book1', 'Max Rowe', '2016' );
const book2 = new Book( 'Book2', 'Alan', '2012' );

console.log(book1.getSummary());