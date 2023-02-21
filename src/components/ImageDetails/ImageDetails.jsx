import PropTypes from 'prop-types';

import styles from '../styles.module.css';

const ImageDetails = ({ largeImageURL }) => {
  return <img className={styles.img} src={largeImageURL} alt="foto" />;
};

export default ImageDetails;

ImageDetails.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};
