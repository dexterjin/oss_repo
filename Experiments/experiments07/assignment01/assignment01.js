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
bookList.sort(sortBook);
// sortBook 이라는 comparing function을 완성하시오.
// sortBook(a, b) { if (a > b) return 1; else if (a < b) return -1; else return 0;
// 1 순위 : title
// 2 순위 : author
console.log(bookList);
