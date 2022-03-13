function Book(title, author, book) {
    this.title = title
    this.author = author
    this.book = book
}
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year
    return `${this.title} has ${years} old`
}
Book.prototype.revise = function(newYear) {
    this.year = newYear
    this.revised = true
}
const book1 = new Book('Bokk one', 'Radin' , 2013);
const book2 = new Book('Book two', 'Bisan', 2020)