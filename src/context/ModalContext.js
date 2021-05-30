import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idrecipe, saveIdrecipe] = useState(null);
  const [infoRecipe, saveInfoRecipe] = useState({});

  const getRecipeById = async () => {
    const recipe = await axios.get(
      `${process.env.REACT_APP_API}/lookup.php?i=${idrecipe}`
    );
    saveInfoRecipe(recipe.data.drinks[0]);
  };

  useEffect(() => {
    if (!idrecipe) return;
    getRecipeById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idrecipe]);

  return (
    <ModalContext.Provider
      value={{
        infoRecipe,
        saveIdrecipe,
        saveInfoRecipe
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
