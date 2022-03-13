const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    }
}

const book1= Object.create(bookProtos);
book1.title = 'Book one'
book1.author = 'Negin'
book1.year = 2021

const book2= Object.create(bookProtos, {
    title : {value: 'Book one'},
    author: {value: 'Bisan'},
    year: {value: 2011}
    });
