import styled from "styled-components"

export const FinancialCardB = styled.div` 
    width: 380px;
    height: 310px;
    background-color: ${props => {
        switch (props.color) {
            case 'red':
                return `#EC7A7A;`
            case 'blue':
                return `#7A85EC`
            case 'green':
                return `#65D4AC`
            default:
                return `#EC7A7A`;
        }
    }};

    border-radius: 20px;
    display: flex;
    justify-content:space-between;
    flex-direction: column;
`
export const BallIcon = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background:white;
    display: flex;
    align-items:center;
    justify-content: center;
    margin-left: 16px;
    margin-top: 22px;
`

export const MoneyIcon  = styled.img`
    width: 14px;
`

export const TotalPrice  = styled.h1`
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 32px;
        letter-spacing: -0.02em;
        color: #FFFFFF;
`

export const TotalTitle  = styled.p`
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        letter-spacing: -0.02em;
        margin-top:18px;
        color: rgba(255, 255, 255, 0.7);
`

export const Line  = styled.div`
    border: 1px solid #E9EDF7;
`

export const AveragePrice  = styled.h4`

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;

        /* or 133% */
        letter-spacing: -0.02em;

        color: #FFFFFF;`

export const AverageTitle  = styled.p`
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        /* or 171% */
        letter-spacing: -0.02em;
        color: rgba(255, 255, 255, 0.7);
`

export const BoxTotal = styled.div`
    margin-left: 16px;

`

export const BoxAverage = styled.div`
    margin-left: 16px;
    margin-bottom: 22px;
`
export const FinancialBox = styled.div`
    display: flex;
    margin-top: 83px;
    gap: 20px;
`