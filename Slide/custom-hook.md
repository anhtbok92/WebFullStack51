### 1. Custom Hooks là gì?
Từ phiên bản 16.8, 
React Hooks chính thức được thêm vào ReactJS. Ngoài những hooks có sẵn trong React Hooks như useState, useEffect, useCallback, … 
Thì React cho phép chúng ta tự định nghĩa ra những hooks khác tuỳ theo mỗi nghiệp vụ.

#### Những đặc điểm của một Custom Hooks:
- Là một function, nhận input và trả output.
- Tên của nó bắt đầu bởi use như useQuery, useColor, …
- Khác với functional component, custom hooks trả về một dữ liệu bình thường, không phải là jsx.
- Khác với function bình thường, custom hooks có thể sử dụng các hooks khác như useState, useRef, … và cả các custom hooks khác.
- Các thư viện cho ReactJS cũng cung cấp các hooks cho chúng ta dùng như useForm (React Hook Form), useMediaQuery (MUI), …


### Tại sao lại sử dụng Custom Hooks

#### Một vài lợi ích của custom hooks có thể kể đến như:
- Tách biệt hoàn toàn logic với giao diện.
- Tái sử dụng ở nhiều component khác nhau có cùng logic xử lý. Từ đó nếu logic thay đổi thì chỉ cần sửa tại một nơi duy nhất.
- Chia sẻ dữ liệu, logic giữa các component.
- Ẩn các đoạn code có logic phức tạp của một component, giúp component dễ đọc hơn.

#### Khi nào thì dùng custom hooks trong ReactJS

- Khi một đoạn code (logic) được tái sử dụng nhiều nơi (dễ thấy khi bạn copy cả 1 đoạn code mà không cần sửa gì, trừ tham số truyền vào. Tách như cách mà bạn tách một function).
- Khi logic quá dài và phức tạp. Bạn muốn viết nó ở 1 file khác, để component của bạn ngắn hơn và dễ đọc hơn vì không cần quan tâm đến logic của hook đó nữa.

### Demo

Xây dựng 1 app có 2 component sau:
- UserCard : Lấy thông tin của 1 user (call API + hiển thị)
- UserList : Lấy danh sách user (call API + hiển thị)

App.js

```angular2html
export default function App() {
  return (
    <div className="App">
      <UserCard />
      <UserList />
    </div>
  );
}
```

useFetchData.js
```angular2html
import axios from "axios";
import { useEffect, useState } from "react";

function useFetchData(URL = "", params = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(URL, params);
      if (response.status === 200) {
        setData(response.data || null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, data };
}

export default useFetchData;
```

useCard.js
```angular2html
import React from "react";
import useFetchData from "./hooks/useFetchData";

function UserCard() {
  const { isLoading, data: userInfo } = useFetchData(
    "https://5f3fda1244212d0016fed4db.mockapi.io/users/1"
  );

  return (
    <>
      {isLoading ? (
        <div> Loading ... </div>
      ) : userInfo ? (
        <div>
          <h2>Thông tin User</h2>
          <p>Họ tên: {userInfo.fullName}</p>
          <p>Tuổi: {userInfo.age}</p>
          <p>Địa chỉ: {userInfo.address}</p>
          <p>Số điện thoại: {userInfo.phone}</p>
        </div>
      ) : (
        <div>Không thể lấy thông tin user</div>
      )}
    </>
  );
}

export default UserCard;
```



useList.js
```angular2html
import React from "react";
import useFetchData from "./hooks/useFetchData";

function UserList() {
  const { isLoading, data: list } = useFetchData(
    "https://5f3fda1244212d0016fed4db.mockapi.io/users"
  );

  return (
    <>
      {isLoading ? (
        <div> Loading ... </div>
      ) : list ? (
        <ul>
          <h1>Danh sách người dùng</h1>
          {list.map((user, index) => (
            <li key={index}>
              Họ tên: {user.fullName} - Số điện thoại: {user.phone}
            </li>
          ))}
        </ul>
      ) : (
        <div>Không thể lấy danh sách người dùng</div>
      )}
    </>
  );
}

export default UserList;

```

https://codesandbox.io/s/custom-hooks-forked-lu9hv?file=/src/hooks/useFetchData.js:0-610