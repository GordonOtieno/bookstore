import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const categories = ['--select--', 'Play', 'Novel', 'Short Story'];

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const titleHandler = (event) => setTitle(event.target.value);
  const categoryHandler = (event) => setCategory(event.target.value);

  const submitHandler = (e) => {
    const book = {
      id: nanoid(),
      title,
      category,
    };
    dispatch(addBook(book));
    setTitle('');
    setCategory(categories[0]);
    e.preventDefault();
  };

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitHandler}>
        <input type="text" value={title} placeholder="Book title" required onChange={titleHandler} />
        <select value={category} onChange={categoryHandler}>
          { categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};
export default AddBook;
