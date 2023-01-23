import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
    *{
        padding: 0; margin: 0; border: 0; outline: 0;
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
        
    }
    body{
        width: 100vw;
        overflow-x: hidden;
        background-color: #F5f5f5;
        display: flex;  
    }
    #root{
        display: flex;
        gap: 30px;
    }

`;
