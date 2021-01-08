const bookProtors = {
    getSummary: function () {
         return `${this.title} is written by ${this.author} in ${this.year}`;
    },
        getAge: function () {
         return `${this.title} is ${years} years old`;
        }
}

// create an Object
// const book1 = Object.create( bookProtors );
// book1.title = 'book1';
// book1.author = 'Aluie';
// book1.year = '2018';

const book1 = Object.create( bookProtors, {
    title: { value: 'book1' },
    author: { value: 'Fatou' },
    year: { value: '2019' }
});


console.log(book1);