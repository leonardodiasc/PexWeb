import styled from "styled-components";

export const MenuCss = styled.div`
 

 header{
   width: 290px;
   height: 100vh;

   display: flex;
   flex-direction: column;
   background-color: #FFF;
   font-family: 'DM sans';
 }
 .logo{
   width: 100%;
   height: 20%;
   padding: 20px;
   border-bottom: 1px solid #F4F7FE;

   text-align: center;
 }

 .menu{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 .menu nav li{
    list-style: none;
    margin: 20px 0;
 }
 .menu nav li img{
    margin-right: 10px;
 }
 .selecionado {
    color: #2B3674 !important;
 }

 .menu nav li span {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.02em;
    color: #A3AED0;
 }

`;
 