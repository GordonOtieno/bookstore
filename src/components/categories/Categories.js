import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);

  const getStatusHandler = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button type="button" onClick={getStatusHandler}>Action</button>
      <p>{categories}</p>
    </>
  );
};

export default Categories;
