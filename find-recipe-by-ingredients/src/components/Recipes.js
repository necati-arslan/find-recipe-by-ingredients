import React from "react";
import { useRecipes } from "../contexts/RecipesContext";
import Recipe from "./Recipe";

function Recipes() {
  const recipes = useRecipes();

  return (
    <section className="recipes">
      <div className="container">
        {recipes &&
          recipes.map((recipe, index) => (
            <Recipe key={index} recipe={recipe}></Recipe>
          ))}
      </div>
    </section>
  );
}

export default Recipes;
