import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunk),
});

export default store;
