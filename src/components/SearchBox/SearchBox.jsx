import { nanoid } from 'nanoid';
import style from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';

// const SearchBox = ({ value, onFilter }) => {
//   const id = nanoid();

//   return (
//     <div className={style.wrap}>
//       <label htmlFor={`filter-${id}`}>Find contact by name</label>
//       <input
//         className={style.field}
//         type='input'
//         name='filter'
//         id={`filter-${id}`}
//         autoComplete='on'
//         value={value}
//         onChange={e => {
//           onFilter(e.target.value);
//         }}
//       />
//     </div>
//   );
// };

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
