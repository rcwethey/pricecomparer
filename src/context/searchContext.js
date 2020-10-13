import React, { createContext, useMemo, useState } from 'react';

export const SearchContext = createContext();
export const ReuqestContext = createContext();

const SearchContextProvider = ({children}) => {
  const [searchValue, setSearchValue] = useState('');
  const [sendRequest, setSendRequest] = useState(false);

  const search = useMemo(() => ({
    searchValue,
    setSearchValue
  }), [searchValue])

  const request = useMemo(() => ({
    sendRequest,
    setSendRequest
  }), [sendRequest])

  return (
    <SearchContext.Provider value={search}>
      <ReuqestContext.Provider value={request}>
        {children}
      </ReuqestContext.Provider>
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;