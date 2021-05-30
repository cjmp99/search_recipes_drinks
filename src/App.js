import Form from "./components/Form";
import Header from "./components/Header";
import ListRecipes from "./components/ListRecipes";
import CategoriesProvider from "./context/CategoriesContext";
import ModalProvider from "./context/ModalContext";
import RecipesProvider from "./context/RecipesContext";

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <ListRecipes />
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
