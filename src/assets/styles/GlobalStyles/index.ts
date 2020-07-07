import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,::after,::before{
    box-sizing: border-box !important;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
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
h2 {
    font-family: 'Marmelad', sans-serif;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    color: #282828;
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

button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &.primary {
        color: white;
        padding: 16px 70px;
        background: #5474AF;
    }
    &.lime {
        padding: 16px 70px;
        background: #ffee54;
        color: #5474af;
    }
}

a {
    color: #000;
    text-decoration: none;
}

input[type="text"],
input[type="search"],
input[type="password"],
input[type="email"] {
    box-shadow: none;
    border: none;
    border-radius: none;
    &:focus {
        outline: none;
    }
}
`;

export default GlobalStyle;
