import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, saveRecipes] = useState([]);
  const [search, searchRecipes] = useState({
    name: "",
    category: "",
  });
  const [consult, setConsult] = useState(false);

  const { name, category } = search;

  const getRecipes = async () => {
    if (name.trim() === "" || category.trim() === "") return;
    const results = await axios.get(
      `${process.env.REACT_APP_API}/filter.php?i=${name}&c=${category}`
    );
    saveRecipes(results.data.drinks);
  };

  useEffect(() => {
    if (consult) {
      getRecipes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <RecipesContext.Provider value={{ recipes, searchRecipes, setConsult }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
