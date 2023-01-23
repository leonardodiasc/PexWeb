import * as S from "./styles"
type BalanceCardProps = {
    text: string
    number: string
    percentage: string
}

import CashIcon from '../../assets/cifraoroxo.png'

export function BalanceCard({number, text, percentage}:BalanceCardProps){
    return(
        <>
        <S.BalanceCard>
            <S.BallIcon>
                <S.CashIcon src={CashIcon}/>
            </S.BallIcon>

            <S.Number>{number}</S.Number>
                <S.Text>{text}</S.Text>
            <S.Percentage>{percentage}</S.Percentage>
        </S.BalanceCard>
        </>
    )
}