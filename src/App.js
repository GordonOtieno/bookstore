import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/books/Page';
import Categories from './components/categories/Categories';
import NavBar from './components/Navbar';
import store from './redux/configureStore';

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
  <Provider store={store}>
    <div className="main-container">
      <Router>
        <NavBar title="Bookstore CMS" nav={routes} />
        <Switch>
          {routes.map(({ path, component }) => (
            <Route path={path} exact key={path}>{component}</Route>
          ))}
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default App;
