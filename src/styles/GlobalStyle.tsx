import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background: ${({ theme }) => theme.palette.primary.default};
        color: ${({ theme }) => theme.palette.secondary.lighter};
    }


    a {
        text-decoration: none;
        color: inherit;
    }
`;
