import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectNameFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';
import style from './SearchBox.module.css';

const SearchBox = () => {
  const id = nanoid();

  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = filter => dispatch(changeFilter(filter));

  return (
    <div className={style.wrap}>
      <label htmlFor={`filter-${id}`}>Find contact by name</label>
      <input
        className={style.field}
        type='input'
        name='filter'
        id={`filter-${id}`}
        autoComplete='on'
        value={filter}
        onChange={e => {
          handleFilterChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
