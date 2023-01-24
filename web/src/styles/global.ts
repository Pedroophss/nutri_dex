import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
        font-family: 'Roboto', sans-serif;
    }
    button {
        cursor: pointer;
    }
`