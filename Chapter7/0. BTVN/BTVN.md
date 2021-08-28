# Bài tập về nhà.
### Công nghệ sử dụng 
- Xây dựng Ecommerce RestFull API
- Nodejs, Express, JWT, Mongoose...

### Router

#### Users (customer, admin, manager)

- Lấy thông tin tất cả users : GET /api/v1/users
  
- Lấy thông tin của 1 users : GET /api/v1/users/:id
  
- Tạo user mới: POST /api/v1/users/register

- Cập nhật thông tin user: PUT /api/v1/users/:id

- Xóa user khỏi hệ thống: DELETE /api/v1/users/:id

- Lấy tổng số user (khách hàng) trong hệ thống: GET /api/v1/users/get/count

- Login vào hệ thống trả về Json TOKEN: /api/v1/users/login

#### Products

- Lấy danh sách các sản phẩm: GET /api/v1/products

- Lấy thông tin chi tiết của 1 sản phẩm : GET /api/v1/products/:id

- Tạo 1 sản phẩm mới: POST /api/v1/products/register

- Cập nhật thông tin sản phẩm: PUT /api/v1/products/:id

- Xóa sản phẩm khỏi hệ thống: DELETE /api/v1/products/:id

#### Orders

- Lấy danh sách các đơn hàng: GET /api/v1/orders

- Lấy thông tin chi tiết của 1 đơn hàng : GET /api/v1/orders/:id

- Tạo 1 đơn hàng: POST /api/v1/orders/register

- Xóa đơn hàng khỏi hệ thống: DELETE /api/v1/orders/:id

- Cập nhật thông tin đơn hàng: PUT /api/v1/orders/:id


### Table (Model)

#### User Table
- name: string, required
- email: string, required
- passwordHash: string, required
- phone: string, required
- role: boolean, default: false (1: admin, 2: manager, 3: customer)
- street: string
- city: string
- country: string
- avatar: string (để dạng URL)

#### Product Table

- name: string, required
- description: string, required
- image_thumbnail: string (URL)
- images: [{ string }]
- brand: string
- price: Number
- category: string  
- rating: Number, default: 0
- dateCreated: Date
- countInStock: Number, required: true

#### Category Table
- name: string (Đồ gia dụng, đồ điện tử)
- icon: string

#### Order Table
- user: Ref: User
- orderItems: Ref: Item, required  
- shippingAddress1: string (required)
- shippingAddress2: string (required)
- city: string
- country: string
- phone: string
- status: (1: Đang trong kho, 2: Đang ship, 3: Thành công, 4: Đã hủy)
- totalPrice: Number (Tổng giá trị đơn hàng)
- dateCreated: Date (Ngày tạo đơn hàng)

#### Item Table
- quantity: Number, required
- product: Ref: Product


### Deadline: Nộp vào buổi 12.
### Sử dụng tool để quản lý công việc: Trello
