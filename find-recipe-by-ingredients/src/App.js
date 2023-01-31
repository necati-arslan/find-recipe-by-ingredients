import "./App.css";
import { LandingPage } from "./components/LandingPage";
import "react-toastify/dist/ReactToastify.css";
import { useRecipes } from "./contexts/RecipesContext.js";
import Recipes from "./components/Recipes";
import RecipeDetail from "./components/RecipeDetail";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
