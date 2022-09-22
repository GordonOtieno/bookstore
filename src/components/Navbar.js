import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import image from './user.png';

const NavBar = ({ title, nav }) => (
  <nav className="navbar">
    <Link to="/" className="logo">{title}</Link>
    <ul className="nav-items">
      {nav.map(({ domain, path }) => (
        <li key={path} className="nav-link">
          <NavLink exact to={path}>{domain}</NavLink>
        </li>
      ))}
    </ul>
    <div className="user-logo">
      <img src={image} alt="userImage" />
    </div>
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
