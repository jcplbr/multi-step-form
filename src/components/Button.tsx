import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  padding: 0 8px;
  cursor: pointer;
  height: 32px;
  width: 72px;
  display: grid;
  place-content: center;
  background: #c3c3c3;
  box-shadow: inset -2px -2px 0 0 #262626, inset 2px 2px 0 0 #f0f0f0,
    inset -4px -4px 0 0 #7e7e7e;
`;

export const NextButton = styled(Button)`
  outline: 2px solid black;
`;
