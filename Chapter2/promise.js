// Khởi tạo promise
const promisePending = new Promise((resolve, reject) => {

});
console.log("Trang thai Promise ban dau: ", promisePending);

// Khi call resolve() -> trang thai la fulfilled
const promiseResolve = new Promise((resolve, reject) => {
    resolve();
});
console.log("Trang thai Promise khi call resolve: ", promiseResolve);

const promiseResolve2 = new Promise((resolve, reject) => {
    resolve(123);
});
console.log("Trang thai Promise khi call resolve with value: ", promiseResolve2);

// Khi call reject() -> trang thai la reject
const promiseReject = new Promise((resolve, reject) => {
    reject();
});
console.log("Trang thai Promise khi call reject: ", promiseReject);

const promiseReject2 = new Promise((resolve, reject) => {
   reject('Da xay ra loi connect den database');
});
console.log("Trang thai Promise khi call reject co loi:", promiseReject2);

// Using promise with method
const promiseMethod = new Promise((resolve, reject) => {
    reject();
})
promiseMethod
    .then(() => {
        console.log('Trang thai thanh cong dc goi');
    })
    .catch(() => {
        console.log('Trang thai error dc goi');
    })
    .finally(() => {
        console.log('Trang thai thanh cong + that bai');
    });

// Using promise with method with value
const promiseMethodWithValue = new Promise((resolve, reject) => {
    const arrayCourse = [
        {
            'CourseName': 'Lap trinh javascript',
            'Price': '2000000',
            'Author': 'Nguyen Tuan Anh'
        },
        {
            'CourseName': 'Lap trinh NodeJs',
            'Price': '5000000',
            'Author': 'Nguyen Tuan Anh'
        }
    ];
    resolve(arrayCourse);
});
promiseMethodWithValue
    .then((valueCourse) => {
        console.log('promiseMethodWithValue: ', valueCourse);
    })
    .catch((error) => {
        console.log('error')
    })
    .finally(() => {
        console.log('Finish call API');
    });

// Hỏi
// - Muốn lấy dữ liệu trả về từ API mà sử dụng Promise ta làm các bước ntn ?
// Bước 1 : Tạo 1 promise để call url
// Bước 2 : Tạo cả resolve và reject
// Bước 3 : Định nghĩa các hàm then, catch, finally

