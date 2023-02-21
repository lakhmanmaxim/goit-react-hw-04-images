import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  return (
    <li
      className={styles.imageGalleryItem}
      onClick={() => onClick({ largeImageURL })}
    >
      <img
        src={webformatURL}
        alt="foto"
        className={styles.imageGalleryItem_image}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
