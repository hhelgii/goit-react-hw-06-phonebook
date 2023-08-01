// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setContacts } from 'redux/contactsReducer';

// import { ContactItem } from './ContactItem';
// import css from './contactList.module.css'
// export const ContactList = () => {
//   const dispatch=useDispatch();
//   const contacts=useSelector(state=>state.contacts.contacts)
//   const filter=useSelector(state=>state.contacts.filter)
//   const onDelete = (id) => {
//     dispatch(setContacts(contacts.filter((contact) => contact.id !== id)));
//   };
//   const onFilterContact = () => {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };
//   const filtered = onFilterContact();
//   return (
//     <ul className={css.contactsList}>
//       {filtered.map(contact => {
//         return (
//           <ContactItem
//             contact={contact}
//             key={contact.id}
//             onDeleteContact={onDelete}
//           />
//         );
//       })}
//     </ul>
//   );
// };

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from 'redux/contactsReducer';
import css from './contactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const onDelete = id => {
    dispatch(setContacts(contacts.filter(contact => contact.id !== id)));
  };

  const onFilterContact = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filtered = onFilterContact();

  return (
    <ul className={css.contactsList}>
      {filtered.map(contact => (
        <li key={contact.id} className={css.listItem}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            onClick={() => onDelete(contact.id)}
            className={css.deleteBtn}
          ></button>
        </li>
      ))}
    </ul>
  );
};
