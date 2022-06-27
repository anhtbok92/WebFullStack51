### 1. Prototype - sử dụng

///////////////////////////////////////
// Coding Challenge #1
/*
1. Sử dụng 1 constructor function để tạo 1 hàm tên Car. Một chiếc oto có 2 property là: make và speed
2. Tạo ra 1 method là 'accelerate' để tăng tốc độ của Car lên 10. Hiển thị tốc độ bằng lệnh console.
3. Tạo ra 1 method là 'brake' để giảm tốc độ của Car đi 5. Hiển thị tốc độ bằng lệnh console.
4. Tạo ra 2 đối tượng xe oto và gọi các method 'accelerate' và 'brake' nhiều lần trên mỗi đối tượng trên.


Ví dụ:
- Xe 'BMW' đi với tốc độ 120KM/H
- Xe 'Mercedes' đi với tốc độ 95KM/H
*/

### 2. Es6 - sử dụng

///////////////////////////////////////
// Coding Challenge #2

/*
1. Tạo lại từ bài tập số 1, nhưng sử dụng với ES6 class.
2. Thêm 1 method getter là 'speedUS' - trả về tốc độ hiện tại của Car: đơn vị (mi/h) (chia by 1.6);
3. Thêm 1 method setter là 'speedUS' - Cài đặt tốc độ hiện tại của Car:  đơn vị (mi/h) (nhưng converts thành km/h trước khi lưu giá trị, bằng cách nhân đầu vào với 1.6);
4. Tạo 1 object oto mới và thử nghiệm với method accelerate and brake, cùng với getter and setter.
   
- Ví dụ: 'Ford' going at 120 km/h
*/

### 3. Prototype kế thừa
///////////////////////////////////////
// Coding Challenge #3

/*
1. Sử dụng constructor function để tạo một Electric Car (gọi là EV) là con của "Class" Car. 
Ngoài property make và speed, EV có thuộc tính pin 'charge';
2. Tạo 1 method 'chargeBattery' có 1 parameter là 'chargeTo' để thiết lập charge = chargeTo;
3. Tạo 1 method 'accelerate' tăng tốc độ của oto lên 20, và giảm pin 1%. 
Sau đó log message: ví dụ: 'Tesla đang chạy với tốc độ 140 km/h, với mức pin 22%';
4. Tạo 1 đối tượng oto điện và thử nghiệm gọi 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

Ví dụ : 'Tesla' đang chạy với tốc độ 120 km/h, với mức pin 23%
*/

///////////////////////////////////////
// Coding Challenge #4

/*
1. Tạo lại bài tập 3, nhưng sử dụng ES6 classes: tạo class 'EVCl' là con của class 'CarCl'
2. Tạo thuộc tính private 'charge';
3. Tạo liên kết 2 method 'accelerate' and 'chargeBattery' trong class EVCl
và update method 'brake' trong class 'CarCl'.

- Ví dụ: 'Rivian' going at 120 km/h, with a charge of 23%
*/