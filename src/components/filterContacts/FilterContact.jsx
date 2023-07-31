import React from 'react';
import propTypes from 'prop-types';
import css from './filteredContacts.module.css'
export const FilterContact = ({ value, onFilterChange }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input className={css.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </>
  );
};
FilterContact.propTypes = {
  value: propTypes.string.isRequired,
  onFilterChange: propTypes.func.isRequired,
};
