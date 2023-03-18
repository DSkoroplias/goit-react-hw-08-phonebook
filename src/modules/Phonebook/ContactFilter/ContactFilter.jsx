import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from 'redux/filter/filter-selector';
import { setFilter } from 'redux/filter/filter-slice';
import styles from './contact-filter.module.scss';

const ContactFilter = () => {
  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.formGroup}>
      <input
        className={styles.formInput}
        value={filter}
        onChange={handleFilter}
        name="filter"
        type="text"
      />
      <label className={styles.formLabel}>Filter books</label>
    </div>
  );
};

export default ContactFilter;
