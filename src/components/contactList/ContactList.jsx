import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contactSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => {
    return state.contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    );
  });

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.btnList}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
