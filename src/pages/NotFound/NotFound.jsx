import { Link } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <main>
      <div className={css.container}>
        <h1 className={css.title}>Oops!</h1>
        <h2>PAGE NOT FOUND</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/" className={css.link}>
          GO TO HOMEPAGE
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
