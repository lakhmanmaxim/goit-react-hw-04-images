import PropTypes from 'prop-types';
import styles from '../styles.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items, showImage }) => {
  return (
    <>
      <ul className={styles.imageGallery}>
        {items.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            onClick={showImage}
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;

ImageGallery.defaultProprs = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  showImage: PropTypes.func.isRequired,
};
