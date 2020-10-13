import React, { useContext, useRef } from 'react';
import classes from './searchbar.module.scss';
import { ReuqestContext, SearchContext } from '../../context/searchContext';

const SearchBar = () => {
  const {setSearchValue} = useContext(SearchContext);
  const {setSendRequest} = useContext(ReuqestContext);
  const search = useRef();

  const submitSearch = e => {
    e.preventDefault();
    setSearchValue(search.current.value);
    setSendRequest(true);
  }

  return (
    <form className={classes.searchBar_form} onSubmit={submitSearch}>
      <div className={classes.searchBar_form_subcontainer}>
        <input
          className={classes.searchBar_form_subcontainer_input}
          ref={search}
          type="text"
          name="search"
          placeholder="Search Recipes"/>
        <button className={classes.searchBar_form_subcontainer_button} type="submit">Submit</button>
      </div>
    </form>
  );
}

export default SearchBar;