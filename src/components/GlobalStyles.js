import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1{
    font-size: 3rem;
    font-weight: bold;
}

h2{
    font-size: 2rem;
}

p{
    padding: 5px;
    font-size: 1.3rem;
}

a{
    text-decoration: none;
    color: rgb(0,0,0);
    
}

button {
    margin: 2px;
    border: 1px solid green;
    width: 120px;
    height: 30px;
    border-radius: 0;
    cursor: pointer;
  }
 `;

export default GlobalStyles;
