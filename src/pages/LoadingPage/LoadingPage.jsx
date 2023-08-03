import { Loader } from 'components/Loader/Loader';
import css from './LoadingPage.module.css';

const LoadingPage = () => {
  return (
    <div className={css.wrapper}>
      <Loader />
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingPage;
