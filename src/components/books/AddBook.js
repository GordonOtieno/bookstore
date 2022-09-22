import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../../redux/books/books';
import './AddBook.css';

const categories = ['--select--', 'Play', 'Novel', 'Short Story'];

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const titleHandler = (event) => setTitle(event.target.value);
  const categoryHandler = (event) => setCategory(event.target.value);

  const submitHandler = (e) => {
    const book = {
      item_id: nanoid(),
      title,
      author: 'Author Author',
      category,
    };
    dispatch(createBook(book));
    setTitle('');
    setCategory(categories[0]);
    e.preventDefault();
  };

  return (
    <section className="addBook-section">
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form className="Addbook-form" onSubmit={submitHandler}>
        <input type="text" value={title} placeholder="Book title" required onChange={titleHandler} />
        <select value={category} onChange={categoryHandler}>
          { categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button className="submit" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};
export default AddBook;
