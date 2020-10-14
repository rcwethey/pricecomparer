import React, { createContext, useContext, useState, useMemo } from 'react';

const SearchContext = createContext();
export const useSearchContext = () => useContext(SearchContext);

const SearchContextProvider = ({children}) => {
  const [searchValue, setSearchValue] = useState('');
  const search = useMemo(() => ({ searchValue, setSearchValue }), [searchValue]);

  return (
    <SearchContext.Provider value={search}>
        {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;