import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { query } = useGlobalContext();

  return (
    <form className="search-form">
      <h2>search hacker news</h2>
      {/* <input type="text" value={query} onChange={e} className="form-input" /> */}
    </form>
  );
};

export default SearchForm;
