import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.navList}>
      <li>
        <NavLink className={css.navLink} to="/register">
          Sign up
        </NavLink>
      </li>
      <li>
        <NavLink className={css.navLink} to="/login">
          Log in
        </NavLink>
      </li>
    </ul>
  );
};
