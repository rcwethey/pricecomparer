import React from 'react';
import InstructionsList from '../InstructionsList';
import IngredientsList from '../IngredientsList';

const DeepRecipeCard = ({data}) => {
  return (
    <>
      <h1>{data.title}</h1>
      <div>
        <IngredientsList ingredients={data.extendedIngredients}/>
        <InstructionsList instructions={data.analyzedInstructions}/>
      </div>
    </>
  )
}

export default DeepRecipeCard;