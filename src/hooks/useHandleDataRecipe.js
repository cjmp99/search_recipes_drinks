import { useState } from "react";

export const useHandleDataRecipe = () => {
  const [search, saveSearch] = useState({
    name: "",
    category: "",
  });

  const getDataRecipes = (e) => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  return [search, getDataRecipes];
};
