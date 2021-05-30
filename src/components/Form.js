import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipesContext } from "../context/RecipesContext";
import { useHandleDataRecipe } from "../hooks/useHandleDataRecipe";

const Form = () => {
  const { categories } = useContext(CategoriesContext);
  const { searchRecipes, setConsult } = useContext(RecipesContext);
  const [search, getDataRecipes] = useHandleDataRecipe();

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        searchRecipes(search);
        setConsult(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Search drinks by category or ingredients</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            placeholder="Search by ingredient"
            type="text"
            onChange={e => getDataRecipes(e)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            onChange={getDataRecipes}
          >
            <option>-- Select Category --</option>
            {categories.map((category, key) => (
              <option key={key} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            value="Search Drink"
            className="btn btn-block btn-primary"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
