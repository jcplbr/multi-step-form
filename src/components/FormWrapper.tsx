import { ReactNode } from "react";
import styled from "styled-components";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <FormContainer>
      <img draggable="false" src="../../public/assets/network.png" width={48} />
      <FormContent>
        <p style={{ lineHeight: "1.5", margin: "0" }}>{title}</p>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
            gridTemplateColumns: "70px minmax(auto, 400px)",
            columnGap: "32px",
          }}
        >
          {children}
        </div>
      </FormContent>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;
