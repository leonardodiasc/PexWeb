import * as S from "./styles"

type ClientCardProps = {
    title: string
    number: string
    percentage: string
    lessThanZero: boolean
}

export function ClientCard({title, number, percentage, lessThanZero}: ClientCardProps) {
    return(
    <>
        <S.ClientCard>
            <S.TextTitle>{title}</S.TextTitle>
            <S.Number>{number}</S.Number>
            <S.Percentage lessThanZero={lessThanZero}>{percentage}</S.Percentage>
        </S.ClientCard>
    </>)
}