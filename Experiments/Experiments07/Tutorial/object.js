function addPrice(amount) {
	    this.price = amount;
}
function book(title, author) {
	    this.title = title;
	    this.author = author;
	    this.addPrice = addPrice; 
}
var myBook = new book("Perl", "Mohtashim");
myBook.addPrice(100);
console.log("Book title is : " + myBook.title);
console.log("Book author is : " + myBook.author);
console.log("Book price is : " + myBook.price);
