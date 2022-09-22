import PropTypes from 'prop-types';
import BookProgress from './BookProgress';
import ActionButtons from './ActionButtons';
import './BookItem.css';

const Book = ({ book }) => {
  const {
    item_id: id, category, title, author, progress,
  } = book;
  return (
    <div className="book-card">
      <div className="book-content">
        <div className="book-info">
          <h5>{category}</h5>
          <h3>{title}</h3>
          <h5 className="author">{author}</h5>
          <ActionButtons id={id} />
        </div>
        <BookProgress progress={progress} />
      </div>

    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: BookProgress.propTypes.progress,
  }).isRequired,
};

export default Book;
