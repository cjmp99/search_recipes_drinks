import React, { useContext, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { ModalContext } from "../context/ModalContext";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    maxHeight: 400,
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalRecipe = ({ open, handleClose, showIngredients }) => {
  const { infoRecipe, saveIdrecipe, saveInfoRecipe } = useContext(ModalContext);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={() => {
        saveIdrecipe(null);
        saveInfoRecipe({});
        handleClose();
      }}
    >
      <div className={classes.paper} style={modalStyle}>
        <h2>{infoRecipe.strDrink}</h2>
        <h3 className="mt-4">Instructions</h3>
        <p>{infoRecipe.strInstructions}</p>
        <h3 className="mt-4">Ingredients and Quantities</h3>
        <ul>{showIngredients(infoRecipe)}</ul>

        <img className="img-fluid my-4" alt="" src={infoRecipe.strDrinkThumb} />
      </div>
    </Modal>
  );
};

export default ModalRecipe;
