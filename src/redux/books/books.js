const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const books = [
  {
    id: '1',
    category: 'Play',
    title: 'An Enemy of the People',
    author: 'Dr Stockman',
    progress: {
      currentChapter: 'Chapter 17',
      completed: '52',
    },
  },
  {
    id: '2',
    category: 'Novel',
    title: 'The River Between',
    author: 'Ngugi Wa Thiongo',
    progress: {
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      completed: '16',
    },
  },
  {
    id: '3',
    category: 'Short Story',
    title: 'The whale Rider',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Module Six',
      completed: '12',
    },
  },
];

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

const bookReducer = (state = books, action) => {
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
