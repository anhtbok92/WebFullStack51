### Nhắc lại về middleware
- Middleware là thành phần nằm ở giữa
- Cụ thể : Trong redux middleware nằm giữa Reducers và Dispatch Action

### Hiểu về khái niệm side-effect (hiệu ứng phụ)
- Trong 1 hàm, ngoài tác dụng chính của hàm, thì nó còn thực hiện một số tác dụng phụ
- Trong react : Các thao tác xử lý cần nhiều thời gian để phản hồi
- Ví dụ
    - Thao tác bất đồng bộ : lấy dữ liệu từ API
    - Thao tác đọc ghi file
    - Thao tác đọc ghi cookies từ browser...

- Các side-effect khi xử lý bằng redux-thunk trở nên khó khăn => Sử dụng redux-saga

### Tìm hiểu về Generator function của ES6
- Generator là 1 function trong javascript có khả năng pause excution (dừng việc thực thi function) và resume execution (tiếp tục thực thi function) khi 1 điều kiện được kích hoạt (gọi hàm next())

Ví dụ
```
function* generatorFunc() {
    yield 0
    console.log('something')
    yield 1
}

const generator = generatorFunc()
console.log(generator.next())  // { value: 0, done: false }
console.log(generator.next())  
// something 
// { value: 1, done: false }
console.log(generator.next())  // { value: undefined, done: true }
```

- Mỗi khi call hàm next, mỗi dòng code trong generator function sẽ được thực thi cho đến khi gặp từ khoá `yield` thì dừng lại và return về 1 object ứng với giá trị của value property của yield trong function

- Có thể hình dung: yield giống như từ khoá return trong hàm thông thường, tuy nhiên nó sẽ chạy tiếp các dòng code tiếp theo và dừng khi gặp từ khoá yield kế tiếp.

### redux-saga là gì ?
#### Giới thiệu
- Redux Saga là 1 thư viện redux middleware giúp chúng ta quản lý các side-effect trong redux một cách hiệu quả
- Redux-Saga sử dụng Generators (function*) của ES6 để xử lý “bất đồng bộ” một cách “đồng bộ”.

#### Luồng hoạt động
![img.png](img.png)

- Khi request API để lấy data về
- Ta cung cấp cho Saga 1 hàm: 
  - Hàm này là Generator Function
  - Trong generator function này có yield
  - Mỗi khi yield ta sẽ trả về 1 plain object
  - Đây là 1 object chứa thông tin chỉ dẫn middleware của redux thực thi các hoạt động khác (gọi hàm async hay put 1 action tới store)

### So sánh redux-saga vs redux-thunk:
- Redux thunk
  + Khi login ta phải dispatch 1 action LOGIN_REQUEST
  + Sau khi dữ liệu được trả về từ API, ta tiếp tục định nghĩa tiếp 2 action: LOGIN_SUCCESS và LOGIN_ERROR
  => Chúng ta phải viết khá nhiều action và khó kiểm soát được các action sinh ra.
  + Luồng chạy của thunk như sau: dispatch 1 action -> reducer bắt được action -> lưu state vào store.
- Redux saga
  + Đối với hành động login từ user, chúng ta chỉ cần tạo 1 saga tương ứng : `1 action <-> 1 saga`
  + Luồng chạy của saga như sau: Dispatch 1 action -> Reducer bắt được action -> saga bắt được action -> saga sẽ dispatch các action liên quan -> reducer bắt được các action liên quan đó -> Lưu state vào store

- Code demo

```angular2html
// redux-thunk
import {
LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_ERROR,
} from './actions/consts';
import { getDataFromAPI } from './api';

const getDataStarted = () => ({ type: LOGIN_REQUEST });
const getDataSuccess = data => ({ type: LOGIN_SUCCESS, payload: data })
const getDataError = message => ({ type: LOGIN_ERROR. payload: message });

const getDataFromAPI = () => {
  return dispatch => {
    dispatch(getDataStarted());
    getDataFromAPI()
      .then(data => {
          dispatch(getUserSuccess(data));
      }).fail(err => {
          dispatch(getDataError(err.message));
      })
    };
};
```
Giải thích:
  - Step 1: Đầu tiên bắn ra action cho phép store biết rằng chuẩn bị 1 API request (dispatch(getDataStarted())
  - Step 2: Tiếp theo thực hiện API request trả về một Promise
  - Step 3: Cuối cùng bắn ra success action nếu request thành công hoặc error action nếu có lỗi

```angular2html
// redux-saga
import { call, put, takeEvery } from 'redux-saga/effects';

import {
LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_ERROR,
} from './actions/consts';
import { getDataFromAPI } from './api';

export function* apiSideEffect(action) {
  try {
      const data = yield call(getDataFromAPI);
      yield put({ type: LOGIN_SUCCESS, payload: data });
  } catch (e) {
      yield put({ type: LOGIN_ERROR, payload: e.message });
  }
}

// the 'watcher' - on every 'LOGIN_REQUEST' action, run our side effect
export function* apiSaga() {
    yield takeEvery(LOGIN_REQUEST, apiSideEffect);
}
```
Giải thích:
  - Step 1 : put thay cho dispatch
  - Step 2 : function cuối (apiSaga()) giúp theo dõi tổng thể toàn bộ các action (ở đây có LOGIN_REQUEST)
  - Step 3 : Với cách gọi của redux-saga, chúng ta có thể get data từ bất kì async function nào

#### Nhận xét:
- Cả 2 cách implement đều dễ đọc
- Đối với redux-thunk: phải đối đầu với một tá các promise, các callback nếu có, rất mất thời gian cho người maintain đọc và tìm code.
- Đối với redux-saga: đơn giản bạn chỉ cần track theo try/catch block để theo dõi dòng code

### Ví dụ cơ bản về sử dụng Redux-saga

Xây dựng app chat. Khi user gõ message, nó sẽ được hiển thị lên màn hình

- Step 1: Xây dựng Redux action

```angular2html
const addMessage = (message, author) => ({
  type: 'ADD_MESSAGE',
  message,
  author
})
```

- Step 2: Logic thay đổi state thông qua Reducer

```angular2html
const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.concat([{
        message: action.message,
        author: action.author
      }])
    default:
      return state
  }
}
```

- Step 3: Khởi tạo Redux-saga

```angular2html
### Import
//...
import createSagaMiddleware from 'redux-saga'
//...

### Tạo middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
reducers,
applyMiddleware(sagaMiddleware)
)

```

- Step 4: Tạo saga logic

```angular2html
import { takeEvery } from 'redux-saga/effects'

const handleNewMessage = function* handleNewMessage(params) {
  const socket = new WebSocket('ws://localhost:8989')
  yield takeEvery('ADD_MESSAGE', (action) => {
    socket.send(JSON.stringify(action))
  })
}

export default handleNewMessage
```

- Step 5: Import saga logic vào middleware ở bước 3 và run nó

```angular2html
import handleNewMessage from './sagas'
//...
sagaMiddleware.run(handleNewMessage)
```

### Các hàm helper trong Redux-saga

- takeEvery(): thực thi và trả lại kết quả của mọi actions được gọi.
- takeLastest() : có nghĩa là nếu chúng ta thực hiện một loạt các actions, nó sẽ chỉ thực thi và trả lại kết quả của của actions cuối cùng.
- take() : tạm dừng cho đến khi nhận được action.
- put() : dispatch một action.
- call(): gọi function. Nếu nó return về một promise, tạm dừng saga cho đến khi promise được giải quyết.
- race() : chạy nhiều effect đồng thời, tuy nhiên chỉ lấy kết quả của effect nhanh nhất, và hủy kết quả của những effect còn lại.

### Tài liệu tham khảo thêm

- https://www.youtube.com/c/EasyFrontend
- https://redux-saga.js.org/docs/Glossary
- https://redux-saga.js.org/docs/api