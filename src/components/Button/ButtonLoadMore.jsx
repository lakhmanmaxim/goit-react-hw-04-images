import PropTypes from 'prop-types';

import styles from '../styles.module.css';

const ButtonLoadMore = ({ loadMore, text }) => {
  return (
    <button
      onClick={loadMore}
      type="button  "
      className={styles.button_load_more}
    >
      {text}
    </button>
  );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
