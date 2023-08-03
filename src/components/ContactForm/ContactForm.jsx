import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { addContactThunk } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactMap = { name: setName, number: setNumber };

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleInputChange = ({ target: { name, value } }) => {
    contactMap[name](value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isAlreadyInContacts = preventAddingSameContact(name);

    if (isAlreadyInContacts) {
      toast.info(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContactThunk({ name, number })).catch(() =>
      toast.error('Server request error. Please try again.')
    );
    setName('');
    setNumber('');
  };

  const preventAddingSameContact = name => {
    const normalizedName = name.toLowerCase();

    return contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.contactFormLabel}>
        <span>Name</span>
        
        <input
          className={css.contactFormInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+((?:'[a-zA-Zа-яА-Я\s])?(?:-[a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я\s]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
      </label>

      <label className={css.contactFormLabel}>
        <span>Number</span>
        
        <input
          className={css.contactFormInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}[\s]?[\-]?\(?\d{1,3}?\)?[\s]?[\-]?\d{1,4}[\s]?[\-]?\d{1,4}[\s]?[\-]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </label>

      <button className={css.addContactBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
