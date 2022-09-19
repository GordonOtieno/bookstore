const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// add book action mathod
export const addBook = (payload) => (
  {
    type: ADD_BOOK,
    payload,

  });

export const removeBook = (id) => (
  {
    type: REMOVE_BOOK,
    id,
  });

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, {
          ...action.payload,
          author: 'Author not set',
          progress: {
            currentChapter: 'Introduction',
            completed: '0',
          },
        }];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
export default bookReducer;
