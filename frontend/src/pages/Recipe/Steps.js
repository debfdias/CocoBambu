import { useState, useEffect } from "react";
import Checkbox from "../../components/Checkbox";
import { ContainerSteps, Step } from "./styles";
import { calculateProgress } from "../../services/utils";

export default function Steps({ isDisabled, steps, setStepsChecked, setProgress }){
  const [counter, setCounter] = useState(0);
  const totalSteps = steps.length;

  useEffect(() => {
    if (counter === totalSteps) {
      setStepsChecked(true);
    }
    calculateProgress(counter, totalSteps, setProgress);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [counter]);

  return (
    <>
      <ContainerSteps>
        <h1>Modo de preparo</h1>

        {steps.map((step, i) => (
          <Step key={i}>
            <Checkbox
              setCounter={setCounter}
              counter={counter}
              isDisabled={isDisabled}
            />
            <div>
              <h1>Passo {i + 1}</h1>
              <p>{step}</p>
            </div>
          </Step>
        ))}
      </ContainerSteps>
    </>
  );
};

