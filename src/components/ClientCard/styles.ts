import styled from "styled-components"

export const ClientCard = styled.div`
        width: 249px;
        height: 95px;
        background: #FFFFFF;
        border-radius: 20px;
        padding: 14px;
`

export const TextTitle = styled.p`
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        align-items: center;
        letter-spacing: -0.02em;
        color: #A3AED0;
`
 
export const Number = styled.h4`
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #2B3674;
`

export const Percentage  = styled.p`
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: -0.02em;
        color: ${props => {
                if(props.lessThanZero === true){
                        return '#CD0505'
                }
                return '##05CD99'     
            }};
`
export const ClientBox = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 20px;
`