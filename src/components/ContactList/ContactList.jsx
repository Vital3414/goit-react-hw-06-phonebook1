import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactSlice';
import { getContacts, getFilter } from '../../redux/contacts/getState';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const filteredContacts =
    Array.isArray(contacts) && filterValue
      ? contacts.filter(
          contact =>
            contact?.name &&
            contact?.number &&
            contact.name.toLowerCase().includes(filterValue.toLowerCase())
        )
      : [];

  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contacts}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <p>
            <span className={css.accent}> Ім'я:</span> {contact?.name}
          </p>
          <p>
            {' '}
            <span className={css.accent}> Номер:</span> {contact?.number}
          </p>
          <button
            className={css.dltBtn}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
