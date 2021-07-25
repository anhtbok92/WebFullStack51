// 1. Arrow function (=>)
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Giả sử ta muốn tìm các số chẵn
// Cách viết cũ
var odd = numbers.filter(function(n) { return n % 2 == 1 });
console.log(odd);


function odd(n) {
    return n % 2 == 1;
}

// Với arrow
odd = numbers.filter(n => n % 2 == 1);
console.log(odd);

// 2. Destructuring
var foo = ["one", "two", "three"];
// Cách cũ
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// Dùng destructuring
var [one, two, three] = foo;

// Với object
var obj = { firstName:'Hoang', lastName:'Pham' };
// Cách cũ
var firstName = obj.firstName;
var lastName = obj.lastName;

// Dùng destructuring
var { firstName, lastName } = obj;

// Nếu muốn lấy tên biến khác tên field của object
var { firstName : fn, lastName : ln } = obj; //fn: Hoang, ln: Pham


// 3. Default parameter
// Cách cũ, phải check tham số truyền vào rồi xác định giá trị
function multiply(a, b) {
    var b = typeof b !== 'undefined' ?  b : 1; // tenry option
    return a*b;
}

// Với ES6, chỉ cần sử dụng dấu =
// Redux -> Khai báo state -> phải sử dụng gán giá trị mặc định cho state
function multiply(a, b = 1) {
    return a*b;
}
multiply(5); // 5

// 4. class có hỗ trợ constructor, get/set
class Animal {
    constructor(name) {
        this.name = name;
    }
    run() {
        // handle
    }
    speak() {
        // handle
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}