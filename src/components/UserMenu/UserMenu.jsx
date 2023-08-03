import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logOutThunk } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOutThunk())
      .then(() =>
        toast('You have successfully logged out. Hope to see you again soon!')
      )
      .catch(() => toast.error('Server request error. Please try again.'));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.userMenu}>

        <p>WELCOME {user.email} to your PHONEBOOK</p>
      </div>

      <ul className={css.navList}>
        <li>
          <NavLink className={css.navLink} to="/contacts">
            Contacts
          </NavLink>
        </li>
        <li>
          <button className={css.navLink} type="button" onClick={handleLogOut}>
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
};
