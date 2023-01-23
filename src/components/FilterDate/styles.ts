import styled from "styled-components"

export const DateFilter  = styled.div`
    max-width: 500px;
    background: #FFFFFF;
    padding: 4px 8px;
    box-shadow: 14px 17px 40px 4px rgba(112, 144, 176, 0.08);
    border-radius: 30px;
    display: flex;
    justify-content:space-between ;
    align-items:center;
    gap:24px;
`

export const BoxSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F4F7FE;
    border-radius: 49px;
`

export const Title = styled.p`
    font-size: 10px;
    color: #707EAE;
    font-weight: 500;
`

export const DateIcon = styled.img`
    padding: 12px;
    margin: 0; 

`

export const InputSearch = styled.input`
    background-color: #F4F7FE;
    margin: 0;
    ::placeholder {
        color:#8F9BBA;
    }    
    height: 38px;
    border-radius: 0px 49px 49px 0px;
`