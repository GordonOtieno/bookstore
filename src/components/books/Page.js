import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Books from './BooksContainer';

const BooksPage = () => {
  const books = useSelector((state) => state.book);
  return (
    <div>
      <Books books={books} />
      <AddBook />
    </div>
  );
};

export default BooksPage;
