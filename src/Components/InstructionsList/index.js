import React from 'react';
const InstructionsList = ({instructions}) => {
  return (
    <>
      <h2>Instructions</h2>
      <ol>
        {instructions[0].steps.map(item => <li key={item.number}>{item.step}</li>)}
      </ol>
    </>
  )
};

export default InstructionsList;
