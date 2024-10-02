import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --primary-white: #FFFFFF;
    --primary-black: #232323;
    --primary-green: #E2F163;
    --purple: #896CFE;
    --lightPurple: #B3A0FF;



    --secondary-color: #2ecc71;
    --font-size: 16px;
  }
 
body {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  background-color: #1E1E1E;
  max-width: 393px;
  font-family: 'League Spartan', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,h2,h3 {
    font-family:  'Poppins', sans-serif;
}



`;
export default GlobalStyle;
 