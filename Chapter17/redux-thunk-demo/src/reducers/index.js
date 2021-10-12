import { combineReducers } from "redux";
import { GET_ALL_PRODUCT, ADD_CART, UPDATE_CART, DELETE_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "../actions";

const initProduct = {
  numberCart: 0,
  carts: [],
  products: [],
};

function handleProduct(state = initProduct, action) {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                products: action.payload
            }
        case ADD_CART:
            if (state.numberCart === 0) {
                let cart = {
                   id: action.payload.id,
                   quantity: 1,
                   name: action.payload.name,
                   image: action.payload.image,
                   price: action.payload.price
                }
                state.carts.push(cart)
            } else {
                // Handle Push item to carts
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        case INCREASE_QUANTITY:
            return {
                ...state
            }
        case DECREASE_QUANTITY:
            return {
                ...state
            }
        case UPDATE_CART:
            return {
                ...state
            }
        case DELETE_CART:
            return {
                ...state
            }
        default:
            return state;
    }
}

const shopDemo = combineReducers({
    shopProduct: handleProduct
});

export default shopDemo;