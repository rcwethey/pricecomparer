import React from 'react';
import SearchContextProvider from './context/searchContext';
import Seach from './Components/SearchBar';
import RecipeCards from './Components/RecipeCard';
import classes from './App.module.scss';

const App = () => {
  return (
    <SearchContextProvider>
      <div className={classes.app}>
        <Seach />
        <RecipeCards />
      </div>
    </SearchContextProvider>
  );
}

export default App;