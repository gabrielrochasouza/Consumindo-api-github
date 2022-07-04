import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #f2f2f2;
        min-height: 100vh;
        height: 100%;
        display: flex;
        justify-content: center;
        padding-top: 40px;
        font-family: "Roboto";
    }
    h1{
        margin: 0 0 0px;
        font-size: 24px;
    }
    p{
        font-size: 14px;
        color:rgb(0,0,0,0.5);
        margin: 0 0 20px;
    }
    div{
        box-sizing: border-box;
    }

    #root{
        flex-basis: 100%;
        max-width: 450px !important;
    }

`

export default GlobalStyle