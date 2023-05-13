import { FormEvent, useState, useEffect } from "react";
import styled from "styled-components";
import { AccountForm } from "./components/AccountForm";
import { AddressForm } from "./components/AddressForm";
import { UserForm } from "./components/UserForm";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { Header } from "./components/Header";
import { Button, NextButton } from "./components/Button";
import Dialog from "./components/Dialog";

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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [dialogClosed, setDialogClosed] = useState(false);
  const audio = new Audio("/assets/w95-error.mp3");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    setFormIsSubmitted(true);

    setTimeout(() => {
      setShowErrorDialog(true);
      audio.play();
    }, 3000);
  }

  function handleClose() {
    console.log(dialogClosed);
    setDialogClosed(true);
    setShowErrorDialog(false);

    setTimeout(() => {
      console.log(dialogClosed);
      setDialogClosed(false);
      setShowErrorDialog(true);
      audio.play();
    }, 150);
  }

  return (
    <>
      {windowWidth < 768 ? (
        <Dialog
          title="Warning Message"
          description="View this page on desktop."
          scrImg="/assets/warning.png"
          showButton={false}
          onClose={handleClose}
        />
      ) : (
        <>
          {showErrorDialog ? (
            <Dialog
              title="Syntax message"
              description="Critical error"
              scrImg="/assets/error.png"
              showButton={true}
              onClose={handleClose}
            />
          ) : (
            <MainContainer
              style={{ display: formIsSubmitted ? "none" : "block" }}
            >
              <Header title="Multi-Step Form" hiddenUtilityButton={false} />
              <form
                onSubmit={onSubmit}
                style={{ padding: "0 24px", display: "flex", gap: "24px" }}
              >
                {step}
                <FormUtilities>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <NextButton type="submit">
                      {isLastStep ? "Finish" : "Next"}
                    </NextButton>
                    {!isFirstStep && (
                      <Button onClick={back} type="button">
                        Back
                      </Button>
                    )}
                  </div>
                  <div>
                    {currentStepIndex + 1} / {steps.length}
                  </div>
                </FormUtilities>
              </form>
            </MainContainer>
          )}
        </>
      )}
    </>
  );
}

export default App;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 650px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #c3c3c3;
  padding: 4px 5px 40px;
  font-size: 16px;
  box-shadow: inset -2px -2px 0 0 #262626, inset 2px 2px 0 0 #f0f0f0,
    inset -4px -4px 0 0 #7e7e7e, inset 4px 4px 0 0 #b1b1b1;
`;

export const FormUtilities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
