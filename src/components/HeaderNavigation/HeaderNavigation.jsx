import { Link, NavLink } from 'react-router-dom';

import css from './HeaderNavigation.module.css';
import clsx from 'clsx';

export const HeaderNavigation = () => {
  const getNavLinkClassName = ({ isActive }) =>
    clsx(css.linkText, {
      [css.active]: isActive,
    });

  return (
    <header className={css.headerContainer}>
      <Link to="/">
        <img className={css.headerLogo} src="" alt="" />
      </Link>
      <nav className={css.navLink}>
        <NavLink to="/" className={getNavLinkClassName}>
          Sign up
        </NavLink>
        <NavLink to="/" className={getNavLinkClassName}>
          Sign in
        </NavLink>
      </nav>
    </header>
  );
};
