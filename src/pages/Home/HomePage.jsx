import css from './HomePage.module.css';
import {ImProfile}  from "react-icons/im";

const HomePage = () => {
  return (
    <section className={css.section}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Welcome to Phonebook</h1>
        <span className={css.logo}>
           <ImProfile/>
        </span>
        
      </div>
    </section>
  );
};

export default HomePage;
