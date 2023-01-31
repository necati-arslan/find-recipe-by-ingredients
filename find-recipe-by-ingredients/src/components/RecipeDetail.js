import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipeDetail = async () => {
      const data = await fetchRecipeDetail();
      setRecipe(data);
      console.log(recipe);
    };
    getRecipeDetail();
    console.log(id);
  }, [id]);

  const fetchRecipeDetail = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=e178d8abd3d341d5b8d1f33c5f024a7f&includeNutrition=true`
    ).then((res) => res.json());
    console.log("data", res);
    return res;
  };

  return (
    <section className="detail_recipe">
      <div className="container">
        <div className="content">
          <div className="recipe_header flex">
            <div>
              <img src={recipe.image} alt="" />
              <div>
                <strong>Add My Recipe Book</strong>
              </div>
            </div>
            <div>
              <h2>{recipe.title}</h2>
              <hr />
              <div className="nutrient">
                <h3>Nutrient</h3>
                <div className="values flex">
                  {recipe?.nutrition?.nutrients
                    ? recipe?.nutrition?.nutrients.map((nutrient) =>
                        nutrient.name === "Calories" ||
                        nutrient.name === "Fat" ||
                        nutrient.name === "Carbohydrates" ||
                        nutrient.name === "Protein" ||
                        nutrient.name === "Sugar" ? (
                          <div key={nutrient.name}>
                            <p>
                              <strong>{nutrient.name} : </strong>
                              {nutrient.amount} {nutrient.unit} kcal
                            </p>
                          </div>
                        ) : undefined
                      )
                    : undefined}
                </div>
                <hr />
                <h3>Percent of Nutrient</h3>
                <div className="values flex">
                  {recipe?.nutrition?.caloricBreakdown ? (
                    <>
                      <div>
                        <p>
                          <strong>Protein : </strong>
                          {recipe.nutrition.caloricBreakdown?.percentProtein} %
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>Fat : </strong>
                          {recipe.nutrition.caloricBreakdown.percentFat} %
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>Carbs : </strong>
                          {recipe.nutrition.caloricBreakdown?.percentCarbs} %
                        </p>
                      </div>
                    </>
                  ) : undefined}
                </div>
                <hr />
                <div className="values flex">
                  <div>
                    <p>
                      <strong>Ready In Minutes : </strong>
                      {recipe.readyInMinutes}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>servings : </strong>
                      {recipe.servings}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {recipe?.extendedIngredients ? (
            <div className="ingredients">
              <hr />
              <h3>Ingredients</h3>
              <ul className="flex">
                {recipe.extendedIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.original}</li>
                ))}
              </ul>
            </div>
          ) : undefined}
          {recipe?.instructions ? (
            <div className="direction">
              <hr />
              <h3>Instructions</h3>
              <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
            </div>
          ) : undefined}
          <div className="direction">
            <hr />
            <h3>Direction</h3>
            <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecipeDetail;
