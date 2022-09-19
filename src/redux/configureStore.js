import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import bookReducer from './books/books';

const reducer = combineReducers({ book: bookReducer });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
