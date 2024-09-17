const book ={
	title: 'The Great Gatsby',
	author: 'F. Scott Fitzgerald',
	yearPublished: 1925
}

const{title, author, yearPublished} = book
let bookTitle = book.title
let bookAuthor = book.author
let bookResult = bookTitle + " by " +bookAuthor

console.log(`${title} by ${author}.`)

console.log(bookResult)
