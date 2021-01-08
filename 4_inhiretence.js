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

// Create new Maganize
function Magazine( title, author, year, month ) {
    Book.call( this, title, author, year );

    this.month = month;
}

// Inherit Protoype
Magazine.prototype = Object.create( Book.prototype );

// Instatiate Maganzise
const mag1 = new Magazine( 'magOne', 'Pa', '2017', 'jan' );
const mag2 = new Magazine( 'magTwo', 'Lamin', '2010', 'dec' );

// Use Magazine contructr
Magazine.prototype.contructor = Magazine;


// console.log( mag2.getSummary() );
console.log(mag1);