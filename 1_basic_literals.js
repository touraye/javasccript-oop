// const text = "Hello";
// console.log( text.toUpperCase() );

// const note = new String( 'hey' );
// console.log( note );
// console.log(typeof note);

// object literal
// create a book object and make a method call to it
const Book1 = {
    title: "Book1",
    author: "Max Rowe",
    year: "2016",
    getSummary() {
        return `${this.title} is written by ${this.author} in ${this.year}`;
    }
};

const Book2 = {
    title: "Book2",
    author: "Alan",
    year: "2012",
    getSummary() {
        return `${this.title} is written by ${this.author} in ${this.year}`;
    }
};

// console.log(Book2.getSummary());

// get values and keys for object
console.log( Object.values( Book1 ) );
console.log(Object.keys(Book2));