const CHECK_STATUS = 'bookstore/books/CHECK_STATUS';
const REMOVE_CATEGORY = 'bookstore/books/REMOVE_CATEGORY';

// add book action mathod
export const addCategory = (payload) => (
  {
    type: CHECK_STATUS,
    payload,

  });

export const removeBook = (id) => (
  {
    type: REMOVE_CATEGORY,
    id,
  });

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
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
