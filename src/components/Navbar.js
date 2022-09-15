import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ title, nav }) => (
  <nav>
    <Link to="/">{title}</Link>
    <ul>
      {nav.map(({ domain, path }) => (
        <li key={path}>
          <NavLink exact to={path}>{domain}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  nav: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
  })).isRequired,
};

export default NavBar;
