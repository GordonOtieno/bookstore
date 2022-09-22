import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';
import './BookItem.css';

const ActionButtons = ({ id }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => dispatch(deleteBook(id));

  return (
    <div>
      <button className="actionButton" type="button">Comments</button>
      {' '}
      |
      <button className="actionButton" type="button" onClick={deleteHandler}>Remove</button>
      {' '}
      |
      <button className="actionButton" type="button">Edit</button>
    </div>
  );
};

ActionButtons.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ActionButtons;
