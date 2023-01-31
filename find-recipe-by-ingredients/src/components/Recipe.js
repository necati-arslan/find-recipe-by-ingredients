import React from "react";
import { Link } from "react-router-dom";

function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <div className="item">
        <div className="recipe_img">
          <img src={recipe.image} alt="" />
        </div>
      </div>
      <div className="recipe_title">Leche Flan (Caramel Flan)</div>
      <div className="item ingredient">
        <div>
          <div className="title_used">Used Ingredients</div>
          <div className="used_ingredients flex">
            {recipe.usedIngredients &&
              recipe.usedIngredients.map((ingredient, index) => (
                <div key={index} className="flex">
                  <img src={ingredient.image} alt="" />
                  <span>{ingredient.name}</span>
                </div>
              ))}
          </div>
          <div className="title_missed">Missed Ingredients</div>
          <div className="missed_ingredients flex">
            {recipe.missedIngredients &&
              recipe.missedIngredients.map((ingredient, index) => (
                <div key={index} className="flex">
                  <img src={ingredient.image} alt="" />
                  <span>{ingredient.name}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="item button">
          <Link to={`recipeDetail/${recipe.id}`}>
            <button className="btn-red getRecipe">See Recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
