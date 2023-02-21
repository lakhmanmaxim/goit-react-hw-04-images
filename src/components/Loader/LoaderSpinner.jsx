import { Dna } from 'react-loader-spinner';

import styles from '../styles.module.css';

const Loader = () => {
  return (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass={styles.dna_wrapper}
    />
  );
};

export default Loader;
