import axios from "axios";

let BASE_API_URL = 'https://609a4b0c0f5a13001721a851.mockapi.io/api';
export default function CallApi(endPoint, method = 'GET', body) {
    return axios({
        method,
        url: `${BASE_API_URL}/${endPoint}`,
        data: body
    }).catch(error => {
        console.log('error', error);
    })
}