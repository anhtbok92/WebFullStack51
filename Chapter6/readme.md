## Authentication và Authorization

### 1. Authentication (bạn là ai ?)
- Authentication là quá trình hệ thống kiểm tra, xác định danh tính của người dùng hoặc một hệ thống khác đang truy cập vào hệ thống hiện tại.
- Authentication xác thực chủ yếu dựa trên hai thông tin: tên người dùng và mật khẩu.

### 2. Authorization (bạn được làm gì ?)
- Authorization thường được thực hiện sau khi quá trình authentication kết thúc.
- Xác định bước tiếp theo xác định bạn được phép làm gì trong hệ thống.

## Token Based Authentication

- Sơ đồ hoạt động của JWT

![img_4.png](img_4.png)

- Giải thích:
  + Khi chúng ta đăng nhập một tài khoản và gửi các thông tin như email/password lên server thì nó sẽ ký một token
  + Và gửi token đó về phía client để lưu trữ.
  + Cứ như vậy mỗi lần client truy cập trang thì sẽ gửi request lên thì phải kèm theo token
  + Server sẽ check mã này và gửi lại response thành công hay thất bại tương ứng ngược về client.

- Các thành phần của JWT
    + Header
    + Payload
    + Signature
    
- Cấu trúc kết hợp: `header.payload.signature`
- Ứng dụng Client thường đính kèm mã JWT vào header với tiền tố Bearer

```angular2html
Authorization: Bearer [header].[payload].[signature]
```