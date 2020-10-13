import React, {useEffect, useState } from 'react';
import { API_KEY } from '../config/env.json';
import RecipeCard from '../Components/RecipeCard';

const RequestRecipe = ({newData}) => {
  const [newResultArr, setNewResultArr] = useState([]);
  const results = newData.results;

  //* THis is a little weird, not sure if this will work, but I am trying to get it to work asyncronously before I have to change it back. 
  //* If it doesn't work the commented out stuff is the old synchronous code. 
  useEffect(() => {
    setNewResultArr([]);
    for(let i=0; i<results.length-1; i++){
      fetch(`https://api.spoonacular.com/recipes/${results[i].id}/information?apiKey=${API_KEY}`, {
      "method": "GET",
      "headers": { "Content-Type": "application/JSON" }
      })
      .then(newResponse => newResponse.json())
      .then(newResult => setNewResultArr(newResultArr => [...newResultArr, newResult]))
    }
  }, [newData, results])

  return (
    <>
      {(newResultArr.length+1 === results.length) 
        && <RecipeCard arr={newResultArr}/> }
    </>
  );
}

export default RequestRecipe;