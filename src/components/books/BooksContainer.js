import PropTypes from 'prop-types';
import Book from './BookItem';
import './BookItem.css';

const Books = ({ books }) => (
  <ul className="books-cont">{ books.map((book) => <li key={book.title}><Book book={book} /></li>)}</ul>
);
Books.propTypes = {
  books: PropTypes.arrayOf(Book.propTypes.book).isRequired,
};
export default Books;
