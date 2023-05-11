import { FormEvent, useState } from "react";
import { AccountForm } from "./components/AccountForm";
import { AddressForm } from "./components/AddressForm";
import { UserForm } from "./components/UserForm";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { MainContainer } from "./components/MainContainer";
import { Header } from "./components/Header";
import { FormUtilities } from "./components/FormUtilities";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Success!");
  }

  return (
    <MainContainer>
      <Header />
      <form
        onSubmit={onSubmit}
        style={{ padding: "0 41px 0 31px", display: "flex" }}
      >
        {step}
        <FormUtilities>
          <div>
            <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
            {!isFirstStep && (
              <button onClick={back} type="button">
                Back
              </button>
            )}
          </div>
          <div>
            {currentStepIndex + 1} / {steps.length}
          </div>
        </FormUtilities>
      </form>
    </MainContainer>
  );
}

export default App;
