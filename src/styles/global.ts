import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-shadow: border-box;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
}


body{
    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-200']};
    /* background-color: red; */
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-font-smothing: antialiased;
}


body, input, textarea, button{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`