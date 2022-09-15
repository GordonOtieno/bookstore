import AddBook from './AddBook';
import Books from './BooksContainer';

const books = [
  {
    category: 'Play',
    title: 'An Enemy of the People',
    author: 'Dr Stockman',
    progress: {
      currentChapter: 'Chapter 17',
      completed: '52',
    },
  },
  {
    category: 'Novel',
    title: 'The River Between',
    author: 'Ngugi Wa Thiongo',
    progress: {
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      completed: '16',
    },
  },
  {
    category: 'Short Story',
    title: 'The whale Rider',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Module Six',
      completed: '12',
    },
  },
];

const BooksPage = () => (
  <div>
    <Books books={books} />
    <AddBook categories={books.map((book) => book.category)} />
  </div>
);

export default BooksPage;
