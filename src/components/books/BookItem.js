import PropTypes from 'prop-types';
import BookProgress from './BookProgress';
import ActionButtons from './ActionButtons';

const Book = ({ book }) => {
  const {
    id, category, title, author, progress,
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
      <ActionButtons id={id} />
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: BookProgress.propTypes.progress,
  }).isRequired,
};

export default Book;
