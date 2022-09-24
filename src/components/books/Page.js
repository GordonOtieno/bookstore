import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadAllBooks } from '../../redux/books/books';
import AddBook from './AddBook';
import Books from './BooksContainer';

const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(loadAllBooks());
  });
  return (
    <div>
      <Books books={books} />
      <AddBook />
    </div>
  );
};

export default BooksPage;
