import React, { useState } from 'react';

const IngrdientsList = ({ingredients}) => {
  const [measureUnits, setMeasureUnits] = useState(true);

  return (
    <>
      <h2>Ingredients</h2>
      {ingredients.map(ingredient => (
          <div key={ingredient.name}>
            <p>{measureUnits ? 
              `${ingredient.originalString}` : 
              `${ingredient.measures.metric.amount.toFixed(2)} ${ingredient.measures.metric.unitShort} ${ingredient.name}` }
            </p>
          </div>
        ))
      } 
      <button onClick={() => setMeasureUnits(!measureUnits)}>{measureUnits ? "Switch to Metric System" : "Switch to US Mesurements"}</button>   
    </>
  )
}
 
export default IngrdientsList;