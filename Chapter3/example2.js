var authorModule = require('./example');

console.log('Using person class of module:');

var person = new authorModule.Person('Nguyen Tuan Anh', 30);

person.showInfoAuthor();

var total = authorModule.sum(10, 20);
console.log(total);

var authorCopyRight = authorModule.AuthorCopyRight;
console.log(authorCopyRight);