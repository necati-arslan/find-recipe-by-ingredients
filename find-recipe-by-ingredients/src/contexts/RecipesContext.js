import { createContext, useContext, useState } from "react";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState();

  const fetchRecipes = async (selectedIngs) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=e178d8abd3d341d5b8d1f33c5f024a7f&ingredients=${[
        ...selectedIngs,
      ]}&number=10`
    );
    const data = await res.json();
    setRecipes(data);
  };

  return (
    <RecipesContext.Provider value={{ recipes, fetchRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};

export function useFetchRecipes() {
  const { fetchRecipes } = useContext(RecipesContext);
  return fetchRecipes;
}

export function useRecipes() {
  const { recipes } = useContext(RecipesContext);
  return recipes;
}
