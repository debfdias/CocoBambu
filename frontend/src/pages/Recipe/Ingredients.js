import { useState, useEffect } from "react";
import { ContainerIngredients, Ingredient } from "./styles";
import Checkbox from "../../components/Checkbox";

export default function Ingredients({ ingredients, setIngredientsChecked }){
  const [check, setCheck] = useState(false);
  const [counter, setCounter] = useState(0);  
  const totalIngredients = ingredients.length;

  function handleCheck(){
    setCheck(!check);
  };

  useEffect(() => {
    if (counter === totalIngredients) {
      setIngredientsChecked(true);
    } else {
      setIngredientsChecked(false);
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [counter]);

  return (
    <>
      <ContainerIngredients>
        <h1>Ingredientes</h1>

        {ingredients.map((ingredient, i) => (
          <Ingredient key={i} onClick={handleCheck}>
            <Checkbox setCounter={setCounter} counter={counter} />
            <p>{ingredient}</p>
          </Ingredient>
        ))}
      </ContainerIngredients>
    </>
  );
};

