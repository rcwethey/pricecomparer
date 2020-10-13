import React, { useState, useEffect, useContext } from 'react';
import { API_KEY } from '../config/env.json';
import { ReuqestContext, SearchContext } from '../context/searchContext';
import RequestRecipe from './API/requestRecipes';

const TitleCard = () => {
  const [data, setData] = useState(null);
  const {setSendRequest, sendRequest} = useContext(ReuqestContext);
  const {searchValue} = useContext(SearchContext);

  useEffect(() => {
    if(sendRequest){
      async function fetchData(){
        const result = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchValue}`, {
        "method": "GET",
        "headers": {
          "Content-Type": "application/JSON", 
          }
        })
        const response = await result.json(); 
        setData(response);
        setSendRequest(false);
      }
      fetchData()
    }
  // eslint-disable-next-line
  }, [searchValue, sendRequest]);

  return ( <> {data !== null && <RequestRecipe newData={data}/>} </> );
}

export default TitleCard;