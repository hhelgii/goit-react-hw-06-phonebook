
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from 'redux/contactsReducer';
import { nanoid } from 'nanoid';
import css from './addCotact.module.css';

export const AddContact = () => {
  const dispatch = useDispatch();
const contacts=useSelector(state=>state.contacts.contacts)
  const onSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const number = event.target.number.value.trim();
    dispatch(setContacts([...contacts, { name, number, id: nanoid() }]));
    event.target.name.value = '';
    event.target.number.value = '';
  };

  return (
    <form className={css.contactForm} onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.addContact}>Add contact</button>
    </form>
  );
};
