import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';

const ActionButtons = ({ id }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => dispatch(deleteBook(id));

  return (
    <div>
      <button type="button">Comments</button>
      <button type="button" onClick={deleteHandler}>Remove</button>
      <button type="button">Edit</button>
    </div>
  );
};

ActionButtons.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ActionButtons;
