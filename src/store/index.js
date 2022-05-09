import {createStore, combineReducers, applyMiddleware} from 'redux';
import courseReducer from './reducers/course.reducer';
import categoryReducer from './reducers/category.reducer';
import orderReducer from './reducers/order.reducer';
import authReducer from './reducers/auth.reducer';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cart.reducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  courses: courseReducer,
  cart: cartReducer,
  order: orderReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
