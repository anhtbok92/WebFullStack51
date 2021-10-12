import CallApi from '../api';

export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'; // Tăng sản phẩm.
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'; // Giảm sản phẩm xuống.
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';

export const actFetchProducts = () => {
    return (dispatch) => {
        return CallApi('products', 'GET', null).then(res => {
            dispatch(GetAllProduct(res.data));
        })
    }
}

export function GetAllProduct(payload) {
    return {
        type: GET_ALL_PRODUCT,
        payload
    }
}

export function AddCart(payload) {
    return {
        type: ADD_CART,
        payload
    }
}