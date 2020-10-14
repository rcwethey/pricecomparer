import React from 'react';
import SearchContextProvider from './context/searchContext';
import Seach from './Components/SearchBar';
import RequestSearchValue from './API/requestSearchValue';
import classes from './App.module.scss';

const App = () => {
  return (
    <SearchContextProvider>
      <div className={classes.app}>
        <Seach />
        <RequestSearchValue />
      </div>
    </SearchContextProvider>
  );
}

export default App;