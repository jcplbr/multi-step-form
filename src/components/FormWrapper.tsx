import { ReactNode } from "react";
import styled from "styled-components";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <FormContent>
      <p style={{ textAlign: "center", margin: "0", marginBottom: "2rem" }}>
        {title}
      </p>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </FormContent>
  );
}

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;
