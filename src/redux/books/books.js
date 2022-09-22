import * as API from '../../api';
// actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const SET_ALL_BOOKS = 'bookStore/books/SET_ALL_BOOKS';

const books = [
  {
    item_id: 'dum-1',
    category: 'Play',
    title: 'An Enemy of the People',
    author: 'Dr Stockman',
    progress: {
      currentChapter: 'Chapter 17',
      completed: '52',
    },
  },
  {
    item_id: 'dum-2',
    category: 'Novel',
    title: 'The River Between',
    author: 'Ngugi Wa Thiongo',
    progress: {
      currentChapter: 'Chapter 3: "What a Nice Day"',
      completed: '16',
    },
  },
  {
    item_id: 'dum-3',
    category: 'Short Story',
    title: 'The whale Rider',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Module Six',
      completed: '12',
    },
  },
];
API.createApp();
// add book action creator
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

export const setAllBooks = (payload) => (
  {
    type: SET_ALL_BOOKS,
    payload,
  });
export const createBook = (book) => async (dispatch) => {
  const created = await API.createBook(book);
  if (created) {
    dispatch(addBook(book));
  }
};

export const deleteBook = (id) => async (dispatch) => {
  if (id.startsWith('dum-')) {
    dispatch(removeBook(id));
  } else {
    const deleted = await API.deleteBook(id);
    if (deleted) {
      dispatch(removeBook(id));
    }
  }
};

export const loadAllBooks = () => async (dispatch) => {
  const books = await API.getAllBooks();

  if (books) {
    dispatch(setAllBooks(books));
  }
};

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, {
          ...action.payload,
          author: 'Author Author',
          progress: {
            currentChapter: 'Introduction',
            completed: '0',
          },
        }];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    case SET_ALL_BOOKS: {
      const saved = Object.entries(action.payload).map(([key, value]) => {
        const [book] = value;
        return {
          item_id: key,
          ...book,
          author: 'Author Author',
          progress: {
            currentChapter: 'Introduction',
            completed: '0',
          },
        };
      });

      return state.concat(saved);
    }

    default:
      return state;
  }
};
export default bookReducer;
