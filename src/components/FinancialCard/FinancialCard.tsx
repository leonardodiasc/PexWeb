import money from '../../assets/mvermelho.png'
import {FinancialCardB , AveragePrice, AverageTitle,MoneyIcon,TotalPrice,TotalTitle, Line, BallIcon, BoxAverage , BoxTotal} from './styles'

export function FinancialCard({totalPrice, totalTitle, icon, averagePrice, averageTitle, color}: any) {
    return(
    <>
    <FinancialCardB color={color}>
        <BallIcon>
            <MoneyIcon src={icon}/>
        </BallIcon>
        
        <BoxTotal>
            <TotalPrice>{totalPrice}</TotalPrice>
            <TotalTitle>{totalTitle}</TotalTitle>
        </BoxTotal>

        <Line/>

        <BoxAverage>
            <AveragePrice>{averagePrice}</AveragePrice>
            <AverageTitle>{averageTitle}</AverageTitle>
        </BoxAverage>
    </FinancialCardB>
    </>)
}