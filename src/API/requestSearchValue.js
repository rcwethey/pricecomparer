import React, { useState, useEffect } from 'react';
import { API_KEY } from '../config/env.json';
import { useSearchContext } from '../context/searchContext';
import RequestRecipe from './requestRecipes';

const RequestSearchValue = () => {
  const [data, setData] = useState(null);
  const {searchValue} = useSearchContext();

  console.log(searchValue);

  useEffect(() => {
    if(searchValue !== ''){
      fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchValue}`, {
      "method": "GET",
      "headers": {
        "Content-Type": "application/JSON", 
        }
      })
      .then(result => result.json())
      .then(response => setData(response))
    }
  // eslint-disable-next-line
  }, [searchValue]);

  console.log(data);

  return ( <> {data !== null && <RequestRecipe newData={data}/>} </> );
}

export default RequestSearchValue;