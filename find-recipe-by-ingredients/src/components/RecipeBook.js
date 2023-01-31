import React from "react";
import { Link } from "react-router-dom";
import { useLocalStroge } from "../cusromHook/useLocalStroge";

function RecipeBook() {
  const [recipeBook, setRecipeBook] = useLocalStroge("recipeBook", []);

  console.log(recipeBook);

  return (
    <div className="recipeBook">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h1>My Recipes Book</h1>
          <hr />
          <ul className="listRecipe">
            {recipeBook.map((recipe, index) => (
              <div key={index}>
                <Link to={`/recipeDetail/${recipe.recipeId}`}>
                  <li>{recipe.title} </li>
                </Link>
              </div>
            ))}
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default RecipeBook;
