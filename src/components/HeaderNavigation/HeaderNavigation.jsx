import { Link, NavLink } from 'react-router-dom';

// import css from './HeaderNavigation.module.css';

export const HeaderNavigation = () => {
  return (
    <header>
      <Link to="/">
        <img src="" alt="" />
      </Link>
      <nav>
        <NavLink to="/">Sign up</NavLink>
        <NavLink to="/">Sign in</NavLink>
      </nav>
    </header>
  );
};
