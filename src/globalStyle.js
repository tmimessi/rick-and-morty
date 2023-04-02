import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', serif;
  }

  body {
    background: linear-gradient(180deg, #043f47 0%, #0e282c 100%);
  }

  a {
    text-decoration: none;
  }
`