import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
  }

  input {
    all: unset;
    height: 32px;
    background: #fff;
    box-shadow: inset 2px 2px 0 0 #262626, inset -2px -2px 0 0 #F0F0F0, inset 4px 4px 0 0 #7E7E7E;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
