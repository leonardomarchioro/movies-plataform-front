import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    transition: all 0.5s ease;

    text-decoration: none;
    list-style: none;
  }

  #root{
        width: 100%;
        height: auto;
    }

  body {
    display: block;
    background: ${({ theme }) => theme.background.default};
    color:  ${({ theme }) => theme.text.primary};
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: auto;
    overflow-x: hidden;
  }
`;
 
export default GlobalStyles;