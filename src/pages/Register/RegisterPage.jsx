import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { signUpThunk } from 'redux/auth/authOperations';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const userMap = { name: setName, email: setEmail, password: setPassword };

  const handleInputChange = ({ target: { name, value } }) => {
    userMap[name](value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(signUpThunk({ name, email, password }))
      .then(() => toast('You have successfully signed up!'))
      .catch(() => toast.error('Server request error. Please try again.'));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <span>Name</span>

          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
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
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
