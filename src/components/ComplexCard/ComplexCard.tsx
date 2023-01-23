import * as S from './styles'

export function ComplexCard() {
    return(
    <>
        <S.ComplexCard>
            <S.Text>Planos</S.Text>
            <S.SubText>23 planos ativos</S.SubText>
            <S.Table width='55%'>
            <S.Tr>
                <S.Title>CLUBE</S.Title>
                <S.Title>CLIENTES</S.Title>
                <S.Title>PREÇO</S.Title>
            </S.Tr>
            <S.Line/>
            <S.Tr>
                <S.SubTitle>Estagiários</S.SubTitle>
                <S.SubTitle>312 clientes</S.SubTitle>
                <S.SubTitle>R$ 123,90</S.SubTitle>
            </S.Tr>
            </S.Table>
        </S.ComplexCard>
    </>
    )
}