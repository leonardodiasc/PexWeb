import * as S from './styles'

interface ComplexProps{
    mainTitle?: String,
    mainSubtitle?:String,
    subtitleOne?: String,
    subtitleTwo?: String,
    subtitleThree?: String,
    subtitleFour?: String
}

export function ComplexCard({mainTitle,mainSubtitle,subtitleOne,subtitleTwo,subtitleThree,subtitleFour}:ComplexProps) {
    return(
    <>
        <S.Container>
        <S.ComplexCard>
            <S.Text>{mainTitle}</S.Text>
            <S.SubText>{mainSubtitle}</S.SubText>
            <S.Table>
            <S.Tr>
                <S.Title>CLUBE</S.Title>
                <S.Title>CLIENTES</S.Title>
                <S.Title>PREÇO</S.Title>
            </S.Tr>
            <S.Line/>
            <S.Tr>
                <S.SubTitle>{subtitleOne}</S.SubTitle>
                <S.SubTitle>312 clientes</S.SubTitle>
                <S.SubTitle>R$ 123,90</S.SubTitle>
            </S.Tr>
            <S.Tr>
                <S.SubTitle>{subtitleTwo}</S.SubTitle>
                <S.SubTitle>312 clientes</S.SubTitle>
                <S.SubTitle>R$ 123,90</S.SubTitle>
            </S.Tr>
            <S.Tr>
                <S.SubTitle>{subtitleThree}</S.SubTitle>
                <S.SubTitle>312 clientes</S.SubTitle>
                <S.SubTitle>R$ 123,90</S.SubTitle>
            </S.Tr>
            <S.Tr>
                <S.SubTitle>{subtitleFour}</S.SubTitle>
                <S.SubTitle>312 clientes</S.SubTitle>
                <S.SubTitle>R$ 123,90</S.SubTitle>
            </S.Tr>
            </S.Table>
        </S.ComplexCard>
        </S.Container>
    </>
    )
}