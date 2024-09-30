import { useState } from 'react';
import { toast } from 'react-hot-toast';
import styles from './SearchBar.module.css';
import SearchIcon from '../SearchIcon/SearchIcon';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          <SearchIcon className={styles.icon} />
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
