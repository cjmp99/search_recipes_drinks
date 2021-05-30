import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import ModalRecipe from "./ModalRecipe";

const Recipe = ({ recipe }) => {
  const { saveIdrecipe } = useContext(ModalContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showIngredients = (infoRecipe) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (infoRecipe[`strIngredient${i}`]) {
        ingredients.push(
          <li key={i}>
            {infoRecipe[`strIngredient${i}`]}
            {infoRecipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="col-md-4">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img className="card-img-top" alt="" src={recipe.strDrinkThumb} />
        <div className="card-body">
          <button
            onClick={() => {
              saveIdrecipe(recipe.idDrink);
              handleOpen();
            }}
            className="btn btn-block btn-primary"
          >
            View Recipe
          </button>

          <ModalRecipe
            open={open}
            handleClose={handleClose}
            showIngredients={showIngredients}
          />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
