import { ReactNode } from "react";
import styled from "styled-components";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <FormContainer>
      <img
        draggable="false"
        src="/assets/network.png"
        alt="Network icon"
        width={48}
      />
      <FormContent>
        <p style={{ lineHeight: "1.5", margin: "0" }}>{title}</p>
        <div
          style={{
            display: "grid",
            gap: "12px 32px",
            justifyContent: "space-between",
            alignItems: "center",
            gridTemplateColumns: "72px minmax(auto, 400px)",
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
