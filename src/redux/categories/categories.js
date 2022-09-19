const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// add book action mathod
export const checkStatus = () => (
  {
    type: CHECK_STATUS,

  });

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};
export default categoryReducer;
