import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ShopDemo from '../reducers/index';

const store = createStore(ShopDemo, applyMiddleware(thunk));
export default store;