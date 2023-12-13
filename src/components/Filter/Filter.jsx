import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
// import { getFilter } from '../../redux/contacts/getState';
import { filtered } from '../../redux/contacts/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filtered(event.target.value));
  };

  return (
    <label className={css.search}>
      <span className={css.searchName}>Find contacts by name</span>
      <input
        type="text"
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </label>
  );
}
