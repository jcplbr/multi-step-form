import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'w95fa';
    src: local('w95fa'), url('./fonts/w95fa.woff') format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow: hidden;
    height: 100%;
    background: #008282;
    font-family: w95fa;
  }

  input {
    all: unset;
    padding: 0 8px;
    height: 32px;
    background: #fff;
    box-shadow: inset 2px 2px 0 0 #262626, inset -2px -2px 0 0 #F0F0F0, inset 4px 4px 0 0 #7E7E7E;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  label {
    letter-spacing: 0.2px;
  }

  label::after {
      content: "";
      display: block;
      border-bottom: 2px solid black;
      margin-top: -1px;
      width: 10px;
  }
`;
