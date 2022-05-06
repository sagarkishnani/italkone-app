import {createStore, combineReducers, applyMiddleware} from 'redux';
import courseReducer from './reducers/course.reducer';
import categoryReducer from './reducers/category.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  categories: categoryReducer,
  courses: courseReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
