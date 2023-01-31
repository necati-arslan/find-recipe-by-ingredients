import { React, useState } from "react";
import { useRecipes } from "../contexts/RecipesContext";
import Pagination from "../cusromHook/usePagination";
import Recipe from "./Recipe";

function Recipes() {
  const recipes = useRecipes();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="recipes">
      <div className="container">
        {currentPosts &&
          currentPosts.map((recipe, index) => (
            <Recipe key={index} recipe={recipe}></Recipe>
          ))}
      </div>
      <div className="container">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={recipes.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}

export default Recipes;
