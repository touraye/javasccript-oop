// Contructor
function Book( title, author, year ) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Get Summary
Book.prototype.getSummary = function () {
    return `${this.title} is written by ${this.author} in ${this.year}`;
}

// get Age
Book.prototype.getAge = function () {
    let years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Revise / change book
Book.prototype.revise = function ( newYear ) {
    this.year = newYear;
    this.revised = true;
}

// Instatiate an Object
const book1 = new Book( 'Book1', 'Max Rowe', '2016' );
const book2 = new Book( 'Book2', 'Alan', '2012' );

console.log( book1.getSummary() );
console.log( book2.getAge() );
book2.revise( '2019' );
console.log(book2.getAge());