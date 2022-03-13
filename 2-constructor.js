function Book(title, author, book) {
    this.title = title
    this.author = author
    this.book = book
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
const book1 = new Book('Bokk one', 'Radin' , 2013);
const book2 = new Book('Book two', 'Bisan', 2020)