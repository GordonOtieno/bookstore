import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import bookReducer from './books/books';

const reducer = combineReducers({ book: bookReducer });
const store = configureStore({ reducer });
console.log(store);

export default store;
