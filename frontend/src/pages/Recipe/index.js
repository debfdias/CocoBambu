import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Ingredients from "./Ingredients";
import Steps from "./Steps";
import OpenOrderModal from "./OpenOrderModal";
import CloseOrderModal from "./CloseOrderModal";

import { useTimer } from "../../providers/Timer";
import { getRecipe } from "../../services/server";
import { showMinutes } from "../../services/utils";
import { useAuth } from "../../providers/Auth";

import arrow from "../../assets/icon-back.png";
import clock from "../../assets/icon-time.png";

import {
  Title,
  ContainerHeader,
  InfoTop,
  InfoBottom,
  BackButton,
  PreparationTime,
  ContainerFooter,
  InfoFooter,
  ProgressComplete,
  ProgressIncomplete,
  Button,
} from "./styles";

export default function Recipe() {
  const { id } = useParams();
  const { token } = useAuth();
  const [recipe, setRecipe] = useState("");
  const [progress, setProgress] = useState("0%");

  const [allowInit, setAllowInit] = useState(false);
  const [ingredientsChecked, setIngredientsChecked] = useState(false);
  const [stepsChecked, setStepsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const { time, setStartTimer } = useTimer();  

  async function loadRecipe() {
    setLoading(true);

    try {
      const response = await getRecipe(id, token);

      setRecipe(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRecipe();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  function initProcess() {
    if (ingredientsChecked) {
      setAllowInit(true);
      setIngredientsChecked(false);
      setStartTimer(true);
      setIsDisabled(false);
    }
  }
  return (
    <>
      {loading ? (
        <>
          <Title>Carregando...</Title>
        </>
      ) : (
        <>
          {recipe && (
            <>
              <ContainerHeader image={`${recipe.image}`}>
                <InfoTop>
                  <BackButton to="/recipes">
                    <img src={arrow} alt="back" style={{ marginBottom: 0 }} />{" "}
                    <p>Voltar</p>
                  </BackButton>
                  <PreparationTime>
                    <img src={clock} alt="clock" />
                    <div>
                      <h1>Tempo de preparo</h1>
                      <p> {recipe.time} minutos</p>
                    </div>
                  </PreparationTime>
                </InfoTop>
                <InfoBottom>
                  <h1>{recipe.title}</h1>
                  <p>{recipe.description}</p>
                </InfoBottom>
              </ContainerHeader>

              <Ingredients
                ingredients={recipe.ingredients}
                setIngredientsChecked={setIngredientsChecked}
              />
              <Steps
                isDisabled={isDisabled}
                steps={recipe.steps}
                setStepsChecked={setStepsChecked}
                setProgress={setProgress}                
              />

              <ContainerFooter>
                <InfoFooter>
                  <p>
                    Status <strong>{progress}</strong> pronto e{" "}
                    {showMinutes(time)} minuto(s) utilizado(s)
                  </p>
                  {progress === "100%" ? (
                    <ProgressComplete now={progress} />
                  ) : (
                    <ProgressIncomplete now={progress} />
                  )}
                </InfoFooter>

                <div onClick={initProcess}>
                  {allowInit ? (
                    stepsChecked ? (
                      <CloseOrderModal/>
                    ) : (
                      <Button disabled>
                        Finalizar
                      </Button>
                    )
                  ) : (
                    <OpenOrderModal/>
                  )}
                </div>
              </ContainerFooter>
            </>
          )}
        </>
      )}
    </>
  );
}
