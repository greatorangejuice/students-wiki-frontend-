import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,::after,::before{
    box-sizing: border-box !important;
    margin: 0;
    padding: 0;
    font-size: 16px;
}

#root {
    background: linear-gradient(90deg,#5378B0 0%,#5D44A4 50%, #5A3886 100%);
    min-height: 100vh;
}

h1 {
    font-family: 'Marmelad', sans-serif;
    font-weight: normal;
    color: #ffffff;
    font-size: 72px;
    line-height: 86px;
}

ul, ol {
    li {
        list-style: none;
    }
}

.container {
    max-width: 1440px;
    margin: 0 auto;
}
`;

export default GlobalStyle;
