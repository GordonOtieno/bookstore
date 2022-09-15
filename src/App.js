import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './components/books/Page';
import Categories from './components/categories/Categories';
import NavBar from './components/Navbar';

const routes = [
  {
    path: '/',
    domain: 'BOOKS',
    component: <Books />,
  },
  {
    path: '/categories',
    domain: 'CATEGORIES',
    component: <Categories />,
  },
];

const App = () => (
  <Router>
    <NavBar title="Bookstore" nav={routes} />
    <Switch>
      {routes.map(({ path, component }) => (
        <Route path={path} exact key={path}>{component}</Route>
      ))}
    </Switch>
  </Router>
);

export default App;
