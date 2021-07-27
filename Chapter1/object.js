// Cach 1 : Object literal
var person = {
    firstName: 'Anh',
    lastName: 'Nguyen Tuan',
    showName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    },
    // 30: 'Age',
};

// Cach 2: Object constructor
var psn = new Object();
psn.firstName = 'Anh';
psn.lastName = 'Nguyen Tuan';
psn.showName = function () {
    console.log(this.firstName + ' ' + this.lastName);
}

// Một số tip làm việc với object
// 1. Truy xuất vào các field(key, function) trong object
console.log(person.firstName); // Anh
console.log(person['firstName']); // Anh

// console.log(person.30); // error
console.log(person['30']); // OK

// 2. Duyệt từng phần tử trong object
for (var ps in person) {
    console.log(ps);
}

// 3. Xóa, them phần tử trong object
delete person.firstName;
person.sex = 'male';


// Chuỗi JSON. -> Dạng key - value
// Mongo DB -> key - value
// convert object -> JSON -> javascript đọc và hiển thị cùng html
// Serialize và deserialize
// Serialize -> convert person
JSON.stringify(person);
var jsonVariable = '{"firstName": "Anh", "lastName": "NguyenTuan"}' // ? Có function không ?

// Convert json -> object
var newObjectPerson = JSON.parse(jsonVariable); // -> convert sang object
console.log(newObjectPerson.fistName);
console.log(newObjectPerson.lastName);

// Prototype -> extend -> kế thừa thuộc tính và phương thức
// Es6 -> extends -> class, extends
// Su dung es6 -> convert to Es5
// https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.14.8&externalPlugins=