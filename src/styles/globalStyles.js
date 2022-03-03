import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
    background: #0C0C0C;
    color: #F9F9F9;
    scroll-behavior: smooth;
    text-decoration: none;
}

::-webkit-scrollbar {
    width: 0px;
}

`

export default globalStyle