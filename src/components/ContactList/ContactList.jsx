import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContactThunk } from 'redux/operations';
import { selectContacts, selectFilteredContacts } from 'redux/selectors';
import css from './ContactList.module.css';

import { VscAccount } from "react-icons/vsc";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length === 0 ? (
        <h3 className={css.title}>There are no contacts in your phone book.</h3>
      ) : (
        <ul className={css.contactList}>
          {filteredContacts.map(({ name, id, number }) => (
            <li key={id} className={css.contactListItem}>
              <p>
                <span><VscAccount/>  </span>
                
                <span>{`${name}: `}</span>
                <span>{number}</span>
              </p>
              <button
                className={css.contactListItemBtn}
                type="button"
                onClick={() =>
                  dispatch(deleteContactThunk(id)).catch(() =>
                    toast.error('Server request error. Please try again.')
                  )
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
