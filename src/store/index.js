import {createStore, combineReducers, applyMiddleware} from 'redux';
import courseReducer from './reducers/course.reducer';
import categoryReducer from './reducers/category.reducer';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cart.reducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  courses: courseReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
