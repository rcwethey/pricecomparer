import React, {useEffect, useState } from 'react';
import { API_KEY } from '../config/env.json';
import RecipeCard from '../Components/RecipeCard';

const RequestRecipe = ({newData}) => {
  const [newResultArr, setNewResultArr] = useState([]);
  const results = newData.results;
  console.log(newData);

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

  console.log(newResultArr);

  return ( <> {(newResultArr.length+1 === results.length) && <RecipeCard arr={newResultArr}/> } </> );
}

export default RequestRecipe;