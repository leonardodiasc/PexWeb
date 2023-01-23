import * as S from './styles'

interface ComplexProps{
    mainTitle?: String,
    mainSubtitle?:String,
    subtitleOne?: String,
    subtitleTwo?: String,
    subtitleThree?: String,
    subtitleFour?: String,
    middleTitleOne?: String,
    middleTitleTwo?: String,
    middleTitleThree?: String,
    middleTitleFour?: String,
    farrightTitleOne?: String,
    farrightTitleTwo?: String,
    farrightTitleThree?: String,
    farrightTitleFour?: String,
}

export function ComplexCard({mainTitle, mainSubtitle, subtitleOne, subtitleTwo, subtitleThree, subtitleFour, middleTitleOne = '312 clientes', middleTitleTwo = '312 clientes', middleTitleThree = '312 clientes', middleTitleFour = '312 clientes', farrightTitleOne = 'R$ 123,90', farrightTitleTwo = 'R$ 123,90', farrightTitleThree = 'R$ 123,90', farrightTitleFour = 'R$ 123,90'}:ComplexProps) {
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
                <S.SubTitle>{middleTitleOne}</S.SubTitle>
                <S.SubTitle>{farrightTitleOne}</S.SubTitle>
            </S.Tr>
            <S.Tr>
                <S.SubTitle>{subtitleTwo}</S.SubTitle>
                <S.SubTitle>{middleTitleTwo}</S.SubTitle>
                <S.SubTitle>{farrightTitleTwo}</S.SubTitle>
            </S.Tr>
            <S.Tr>
                <S.SubTitle>{subtitleThree}</S.SubTitle>
                <S.SubTitle>{middleTitleThree}</S.SubTitle>
                <S.SubTitle>{farrightTitleThree}</S.SubTitle>
            </S.Tr>
            <S.Tr>
                <S.SubTitle>{subtitleFour}</S.SubTitle>
                <S.SubTitle>{middleTitleFour}</S.SubTitle>
                <S.SubTitle>{farrightTitleFour}</S.SubTitle>
            </S.Tr>
            </S.Table>
        </S.ComplexCard>
        </S.Container>
    </>
    )
}