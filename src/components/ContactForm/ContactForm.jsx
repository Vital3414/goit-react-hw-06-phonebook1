import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactSlice';
import { getContacts } from '../../redux/contacts/getState';

export default function ContactForm() {
  const { contacts } = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const number = e.target.number.value;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts &&
      Array.isArray(contacts) &&
      contacts.some(contact => contact.name === newContact.name)
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    } else {
      dispatch(addContact(newContact));
    }

    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <span className={css.labelName}> Name</span>
        <input
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </label>
      <label className={css.label}>
        <span className={css.labelName}> Number</span>
        <input
          type="tel"
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}

// import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from '../../redux/contacts/contactSlice';
// import { getContacts } from '../../redux/contacts/getState';

// export default function ContactForm() {
//   const { contacts } = useSelector(getContacts);

//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();

//     const name = e.target.name.value;
//     const number = e.target.number.value;
//     console.log(name, number);

//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     if (
//       contacts &&
//       Array.isArray(contacts) &&
//       contacts.some(contact => contact.name === newContact.name)
//     ) {
//       alert(`${newContact.name} is already in contacts.`);
//       return;
//     } else {
//       dispatch(addContact(newContact));
//     }

//     e.target.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label className={css.label}>
//         <span className={css.labelName}> Name</span>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces."
//           required
//         />
//       </label>
//       <label className={css.label}>
//         <span className={css.labelName}> Number</span>
//         <input
//           type="tel"
//           name="number"
//           placeholder="Number"
//           pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button className={css.addBtn} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }
