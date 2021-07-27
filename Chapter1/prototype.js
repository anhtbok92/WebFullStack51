function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.showFullName = function() {
    console.log(this.firstName + ' ' + this.lastName);
}

Person.prototype.convertLowCaseToUpcase = function() {
    console.log(this.firstName + ' ' + this.lastName);
}

var singer = new Person('Linh', 'Hoang Thuy');
console.log(singer); // Person { firstName: "Linh", lastName: "Hoang Thuy" }
singer.showFullName(); // Linh Hoang Thuy
singer.convertLowCaseToUpcase();