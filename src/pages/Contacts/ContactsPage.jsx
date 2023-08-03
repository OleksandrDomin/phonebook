import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectIsLoading } from 'redux/selectors';
import { fetchContactsThunk } from 'redux/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ContactList } from 'components/ContactList/ContactList';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContactsThunk()).catch(() =>
      toast.error('Server request error. Please try again.')
    );
  }, [dispatch]);
  return (
    <div className={css.container}>
      <div className={css.phoneBookWrapper}>
        <ContactForm />
      </div>

      <div className={css.contactsWrapper}>
        <h2 className={css.title}>My Contacts</h2>
        <Filter />
        {isLoading ? <Loader /> : <ContactList />}
      </div>
    </div>
  );
};

export default ContactsPage;
