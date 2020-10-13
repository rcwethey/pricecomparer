import React, {useState} from 'react';
import classes from './recipeCard.module.scss';
import DeepRecipeCard from '../RecipeDetails';
import Likes from '../../UI/Likes';
import Serves from '../../UI/Serves';
import WW from '../../UI/weight-watchers';
import Timer from '../../UI/Timer';

const RecipeCard = ({arr}) => {
  const [showRecipeCard, setShowRecipeCard] = useState(false);
  const [recipe, setRecipe] = useState(null);

  return (
    <>
      <h2 className={classes.Results}>Results:</h2>
      <div className={classes.container}>
        {arr.map(item => (
          <div 
            key={item.id} 
            lassName={classes.card} 
            onClick={() => {
              setShowRecipeCard(true);
              setRecipe(item);
            }}
          >
            <div className={classes.card__row}>
              <section className={classes.card__row_section}>
                {item.weightWatcherSmartPoints !== null && 
                  (<div className={classes.card__row_section_item}>
                    <WW/>
                    <p>{item.weightWatcherSmartPoints}</p>
                  </div>)
                }
                <div className={classes.card__row_section_item}>
                  <Serves/>
                  <p>{item.servings}</p>
                </div>
                <div className={classes.card__row_section_item_mins}>
                  <Timer/>
                  <p>{item.readyInMinutes}mins</p>
                </div>
              </section>
              <section className={classes.card__row_section2}>
                <img className={classes.card__row_section2_img} alt={item.title} src={item.image}/>
                <div className={classes.card__row_section2_likes}>
                  <Likes/>
                  <p className={classes.card__row_section2_likes_num}>{item.aggregateLikes}</p>
                </div>
              </section>
            </div>
            <p className={classes.card_title}>{item.title}</p> 
          </div>
        ))}
      </div>
      {showRecipeCard && <DeepRecipeCard data={recipe}/>}
    </>
  );
}

export default RecipeCard;