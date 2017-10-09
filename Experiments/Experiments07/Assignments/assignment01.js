function addPrice(amount) {
    this.price = amount;
}
function book(title, author) {
    this.title = title;
    this.author = author;
    this.addPrice = addPrice;
}

var bookList = new Array(new book("Perl1", "Mohtashim"),new book("Smith", "Mohtashim"),new book("Carl", "Mohtashim"),new book("Perl2", "Mohtashim"));

console.log(bookList);
console.log("After Sorting");
//bookList.sort(sortBook);
console.log(bookList);
