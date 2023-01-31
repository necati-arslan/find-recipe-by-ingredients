import "./App.css";
import { LandingPage } from "./components/LandingPage";
import "react-toastify/dist/ReactToastify.css";
import { useRecipes } from "./contexts/RecipesContext.js";
import Recipes from "./components/Recipes";
import RecipeDetail from "./components/RecipeDetail";
import RecipeBook from "./components/RecipeBook";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const recipes = useRecipes();

  return (
    <div>
      <Router>
        <LandingPage />
        <Routes>
          <Route path="/" element={recipes && <Recipes />} />
          <Route path="/recipeDetail/:id" element={<RecipeDetail />} />
          <Route path="/myRecipeBook" element={<RecipeBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
