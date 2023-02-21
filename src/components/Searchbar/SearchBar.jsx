import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.module.css';

import initialState from './initialState';

const SearchBar = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const onFormSubmit = evt => {
    evt.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const { search } = state;

  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={onFormSubmit}>
        <button type="submit" className={styles.searchForm_button}>
          <span className={styles.searchForm_button_label}>Search</span>
        </button>

        <input
          onChange={onInputChange}
          name="search"
          value={search}
          className={styles.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
        />
      </form>
    </header>
  );
};

export default SearchBar;

SearchBar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
