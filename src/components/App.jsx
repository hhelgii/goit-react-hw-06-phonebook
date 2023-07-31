import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { AddContact } from './addContactForm/AddContact';
import { ContactList } from './addContactList/ContactList';
import { FilterContact } from './filterContacts/FilterContact';
import { setContacts, setFilter } from 'redux/contactsReducer';
import css from './app.module.css';
const STORAGE_KEY = 'contacts';

export const App = () => {
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [filter, setFilter] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);
  // console.log(contacts)
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onInputChange = event => {
    const { value } = event.target;
    // setFilter(value);
    dispatch(setFilter(value));
  };
  const onSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const number = event.target.number.value.trim();
    // setContacts([...contacts, { name, number, id: nanoid() }]);
    dispatch(setContacts([...contacts, { name, number, id: nanoid() }]));
  };
  const onFilterContact = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const onDelete = id => {
    // setContacts(contacts.filter(contact => contact.id !== id));
    dispatch(setContacts(contacts.filter(contact => contact.id !== id)));
  };
  // componentDidMount
  useEffect(() => {
    const storageContacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (storageContacts) {
      // setContacts(storageContacts)
      dispatch(setContacts(storageContacts));
    }
  }, []);
  // componentDidMount+componentDidUpdate
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const filtered = onFilterContact();
  return (
    <div
      className={`${css.container} ${css.containerStar} ${css.containerBird}`}
    >
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>

      <div className={`${css.star2}`}></div>
      <div className={`${css.star2}`}></div>
      <div className={`${css.star2}`}></div>
      <div className={`${css.star2}`}></div>
      <div className={`${css.star2}`}></div>

      <h1>PhoneBook:</h1>
      <AddContact onHandleSubmit={onSubmit}></AddContact>
      <h2>Contacts</h2>
      <FilterContact
        value={filter}
        onFilterChange={onInputChange}
      ></FilterContact>
      <ContactList contacts={filtered} onDelete={onDelete}></ContactList>

      <div className={`${css.bird} ${css.birdAnim}`}>
        <div className={`${css.birdContainer}`}>
          <div className={`${css.wing} ${css.wingLeft}`}>
            <div className={`${css.wingLeftTop}`}></div>
          </div>
          <div className={`${css.wing} ${css.wingRight}`}>
            <div className={`${css.wingRightTop}`}></div>
          </div>
        </div>
      </div>

      <div className={`${css.bird} ${css.birdAnim}`}>
        <div className={`${css.birdContainer}`}>
          <div className={`${css.wing} ${css.wingLeft}`}>
            <div className={`${css.wingLeftTop}`}></div>
          </div>
          <div className={`${css.wing} ${css.wingRight}`}>
            <div className={`${css.wingRightTop}`}></div>
          </div>
        </div>
      </div>
      <div className={`${css.bird} ${css.birdAnim}`}>
        <div className={`${css.birdContainer}`}>
          <div className={`${css.wing} ${css.wingLeft}`}>
            <div className={`${css.wingLeftTop}`}></div>
          </div>
          <div className={`${css.wing} ${css.wingRight}`}>
            <div className={`${css.wingRightTop}`}></div>
          </div>
        </div>
      </div>
      <div className={`${css.bird} ${css.birdAnim}`}>
        <div className={`${css.birdContainer}`}>
          <div className={`${css.wing} ${css.wingLeft}`}>
            <div className={`${css.wingLeftTop}`}></div>
          </div>
          <div className={`${css.wing} ${css.wingRight}`}>
            <div className={`${css.wingRightTop}`}></div>
          </div>
        </div>
      </div>
      <div className={`${css.bird} ${css.birdAnim}`}>
        <div className={`${css.birdContainer}`}>
          <div className={`${css.wing} ${css.wingLeft}`}>
            <div className={`${css.wingLeftTop}`}></div>
          </div>
          <div className={`${css.wing} ${css.wingRight}`}>
            <div className={`${css.wingRightTop}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
