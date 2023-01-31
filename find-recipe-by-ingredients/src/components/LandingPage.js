import companyLogo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { useFetchRecipes } from "../contexts/RecipesContext";
import { Link } from "react-router-dom";

import { useNotify } from "../cusromHook/useNotify";

export const LandingPage = () => {
  const [selectedIngs, setSelectedIngs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const fetchRecipes = useFetchRecipes();

  const { notifyError, ToastContainer } = useNotify();

  useEffect(() => {
    const getSuggestions = async () => {
      const data = await fetchIngredientsToSelect();
      setSuggestions(data);
    };
    if (inputValue !== "") {
      getSuggestions();
    }
  }, [inputValue]);

  const fetchIngredientsToSelect = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=e178d8abd3d341d5b8d1f33c5f024a7f&query=${inputValue}&number=5`
    );
    const data = await res.json();

    return data;
  };

  const deleteSelectedIng = (ing) => {
    setSelectedIngs(selectedIngs.filter((selectedIng) => selectedIng !== ing));
  };

  const handleSelectedIngredent = () => {
    if (inputValue === "") {
      notifyError("You must write atleast  one ingredient");
      return;
    }

    setSelectedIngs([...selectedIngs, inputValue]);
    setInputValue("");
    setSuggestions([]);
  };

  const selectIngFromAutoComplete = (name) => {
    setSuggestions([]);
    setInputValue(name);
    setDropdownMenu(false);
  };

  const getRecipes = () => {
    if (selectedIngs.length === 0) {
      notifyError("You must write atleast  one ingredient");
      return;
    }
    fetchRecipes(selectedIngs);
  };

  return (
    <section className="welcomePage">
      <div className="logo">
        <div className="flex">
          <img src={companyLogo} alt="" />
          <div className="logo_text">
            <span> Find</span>Recipe<span>By</span>Ingredients
          </div>
        </div>
      </div>
      <div className="container flex">
        <div className="content">
          <h1>Let's Find Recipe by Ingredients</h1>
          <div className="flex autocomplete">
            <input
              type="text"
              name="meal"
              placeholder="ingredient"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={() => setDropdownMenu(true)}
            />
            <button className="btnAdd" onClick={handleSelectedIngredent}>
              Add
            </button>
            <div className="autocomplete-items">
              {suggestions &&
                dropdownMenu &&
                suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => selectIngFromAutoComplete(suggestion.name)}
                  >
                    <img
                      src={`https://spoonacular.com/cdn/ingredients_100x100/${suggestion.image}`}
                      alt=""
                    />
                    <span>
                      <strong>{suggestion.name}</strong>
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className="selected_Ingredient flex">
            {selectedIngs.map((ing, index) => (
              <div key={index}>
                <div className="cancel" onClick={() => deleteSelectedIng(ing)}>
                  x
                </div>
                <div>{ing}</div>
              </div>
            ))}
          </div>
          <Link to={"/"}>
            <button className="btn-red" onClick={() => getRecipes()}>
              Find
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};
