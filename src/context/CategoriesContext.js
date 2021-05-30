import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
  const [categories, saveCategories] = useState([]);

  const getCategories = async () => {
    const categories = await axios.get(`${process.env.REACT_APP_API}/list.php?c=list`);
    saveCategories(categories.data.drinks);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categories
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
