import styled from "styled-components";

export const HeaderCss = styled.div`

.header{
    width: calc(100vw - 290px);
    height: 50px;
    margin-top: 49px;
    margin-right:30px;
    // display: flex;
    // flex-direction:column;
    // justify-content: space-between;
}

.headerTitulo span{
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #707EAE;
}

.headerTitulo h3{
    margin-top: 10px;
    margin-right: 320px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    letter-spacing: -0.02em;
    color: #2B3674;
}

.pesquisa{
    width: 600px;
    height: 61px;
    left: 20px;
    margin-top: 29px;
    background: #FFFFFF;
    box-shadow: 14px 17px 40px 4px rgba(112, 144, 176, 0.08);
    border-radius: 30px;
}
`;
 