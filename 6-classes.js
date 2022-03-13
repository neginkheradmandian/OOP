class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    }
    revise(newYear) {
        this.year = newYear
        this.revise = true
    }
    static topBookStore() {
        return `Barnes & Nobles`
    }
}

const book1 = new Book('Book one', 'Soraya', 2008)
book1.revise(2014)

console.log(Book.topBookStore())