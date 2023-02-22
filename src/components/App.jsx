import { useState, useEffect } from 'react';

import SearchBar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/LoaderSpinner';
import ButtonLoadMore from './Button/ButtonLoadMore';
import { imagesSearch } from '../shared/api/imagesSearch';
import Modal from 'shared/components/Modal/Modal';
import ImageDetails from './ImageDetails//ImageDetails';

import styles from './styles.module.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [imageDetails, setImageDetails] = useState(null);

  const searchBarSearchImages = ({ search }) => {
    setSearch(search);
    setItems([]);
    setPage(1);
  };

  useEffect(() => {
    
    setLoading(true);

    if (!search) {
      return;
    }

    imagesSearch(search, page)
      .then(data => {
        setItems(prevItems => [...prevItems, ...data.hits]);
        // setItems(data.hits);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [search, page, setItems, setLoading, setError]);

  const showImage = ({ largeImageURL }) => {
    setImageDetails({ largeImageURL });
    setShowModal(true);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);

    // imagesSearch(search, page)
    //   .then(data => {
    //     setItems(prevItems => ([...prevItems, ...data.hits]));
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     setError(error.message);
    //   })
    //   .finally(() => setLoading(false));
  };

  const closeModal = () => {
    setImageDetails(null);
    setShowModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={searchBarSearchImages} />
      <ImageGallery items={items} showImage={showImage} error={error} />
      {!search && (
        <p className={styles.text_message}>Please, enter your request</p>
      )}
      {loading && <Loader />}

      {Boolean(items.length) && (
        <ButtonLoadMore loadMore={loadMore} text={'Load More'} />
      )}

      {showModal && (
        <Modal closeModal={closeModal}>
          <ImageDetails {...imageDetails} />
        </Modal>
      )}
    </>
  );
};

export default App;

// export class App extends Component {
//   state = {
//     items: [],
//     search: '',
//     loading: false,
//     error: null,
//     page: 1,
//     showModal: false,
//     imageDetails: null,
//   };

//   componentDidMount() {
//     const { search } = this.state;

//     this.setState({ loading: true });

//     imagesSearch(search)
//       .then(data => {
//         this.setState({ items: data.hits, loading: false });
//       })
//       .catch(error => {
//         this.setState({ error: error.message });
//       })
//       .finally(() => this.setState({ loading: false }));
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { search, page } = this.state;

//     if (search !== prevState.search || prevState.page !== page) {
//       imagesSearch(search, page)
//         .then(data => {
//           this.setState(({ items, total, totaHits }) => ({
//             items: [...items, ...data.hits],
//             total: data.total,
//             totalHits: data.totalHits,
//           }));
//         })
//         .catch(error => {
//           this.setState({ error: error.message });
//         })
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

//   searchBarSearchImages = ({ search }) => {
//     this.setState({ search, items: [], page: 1 });
//   };

//   loadMore = () => {
//     this.setState(({ page }) => ({ page: page + 1 }));
//   };

//   showImage = ({ largeImageURL }) => {
//     this.setState({
//       imageDetails: { largeImageURL },
//       showModal: true,
//     });
//   };

//   closeModal = () => {
//     this.setState({
//       imageDetails: null,
//       showModal: false,
//     });
//   };

//   render() {
//     const { items, loading, imageDetails, showModal, error } = this.state;
//     const { searchBarSearchImages, loadMore, showImage, closeModal } = this;

//     return (
//       <>
//         <SearchBar onSubmit={searchBarSearchImages} />
//         <ImageGallery items={items} showImage={showImage} error={error} />
//         {loading && <Loader />}

//         {Boolean(items.length) && (
//           <ButtonLoadMore loadMore={loadMore} text={'Load More'} />
//         )}
//         {showModal && (
//           <Modal closeModal={closeModal}>
//             <ImageDetails {...imageDetails} />
//           </Modal>
//         )}
//       </>
//     );
//   }
// }
