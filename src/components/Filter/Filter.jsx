import { useContacts } from 'hooks/useContacts';
import css from './Filter.module.css';

function Filter() {
  const { filter, setFilter } = useContacts();

  return (
    <div className={css.filter_container}>
      <label className={css.label_filter} htmlFor="filter">
        Filter
      </label>
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={event => setFilter(event.target.value)}
        className={css.input_filter}
      />
    </div>
  );
}

export default Filter;
