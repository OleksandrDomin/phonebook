import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { logInThunk } from 'redux/auth/authOperations';
import css from './LogInPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userMap = { email: setEmail, password: setPassword };

  const handleInputChange = ({ target: { name, value } }) => {
    userMap[name](value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logInThunk({ email, password }))
      .then(() => toast('Welcome back! You have successfully logged in.'))
      .catch(() => toast.error('Server request error. Please try again.'));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <span>Email</span>

          <input
            className={css.input}
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className={css.label}>
          <span>Password</span>

          <input
            className={css.input}
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
