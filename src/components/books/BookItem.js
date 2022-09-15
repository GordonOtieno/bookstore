import PropTypes from 'prop-types';
import BookProgress from './BookProgress';

const ActionButtons = () => (
  <div>
    <button type="button">Comments</button>
    <button type="button">Remove</button>
    <button type="button">Edit</button>
  </div>
);

const Book = ({ book }) => {
  const {
    category, title, author, progress,
  } = book;
  return (
    <>
      <div>
        <div>
          <h5>{category}</h5>
          <h3>{title}</h3>
          <h6>{author}</h6>
        </div>
        <BookProgress progress={progress} />
      </div>
      <ActionButtons />
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: BookProgress.propTypes.progress,
  }).isRequired,
};

export default Book;
