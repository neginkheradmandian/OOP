function Book(title, author, book) {
    this.title = title
    this.author = author
    this.book = book
}
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}
function Magazin(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month
}
Magazin.prototype = Object.create(Book.prototype);
const mag = Magazin('Book three', 'Negin', 2023, 'jun');
Magazin.prototype.constructor = Magazin