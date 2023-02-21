import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.module.css';

class SearchBar extends Component {
  state = {
    search: '',
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      search: '',
    });
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { search } = this.state;
    const { onFormSubmit, onInputChange } = this;

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
  }
}

export default SearchBar;

SearchBar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
