import styled from "styled-components"

export const ComplexCard = styled.div` 
        max-width: 470px;
        height: 351px;
        background: #FFFFFF;
        border-radius: 20px;
        padding:20px;
`

export const Text  = styled.h1`
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color:#2B3674;
`
export const SubText = styled.p`
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #A3AED0;
`

export const Table = styled.table`
    width: 100%;
    padding-top:30px;
`
export const Tr = styled.tr`
`

export const Title = styled.th`
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #A3AED0;
        padding-right:120px;        
`

export const SubTitle = styled.td`
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        color: #2B3674;
        padding: 10px 0px;
`
export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`
export const Line  = styled.div`
    position: absolute;
    left: 0;
    right: 20;
    width: 90%;
    margin: 0 auto;
    border: 1px solid #E9EDF7;
    z-index: 1;
`


export const ComplexBox  = styled.div`
        display: flex;
        margin-top: 20px;
        gap: 20px;
`
