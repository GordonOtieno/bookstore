const ADD_CATEGORY = 'bookstore/books/ADD_CATEGORY';
const REMOVE_CATEGORY = 'bookstore/books/REMOVE_CATEGORY';

const categories = ['--select--', 'Play', 'Novel', 'Short Story'];

// add book action mathod
export const addCategory = (payload) => (
  {
    type: ADD_CATEGORY,
    payload,

  });

export const removeBook = (id) => (
  {
    type: REMOVE_CATEGORY,
    id,
  });

const categoryReducer = (state = categories, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        ...action.payload,
      ];

    case REMOVE_CATEGORY:
      return state.filter((_, index) => index !== action.id);
    default:
      return state;
  }
};
export default categoryReducer;
