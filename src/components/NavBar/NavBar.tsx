import { Navigation, 
    BoxTitles, 
    SubTitle, 
    Title, 
    SearchBar, 
    BoxSearch, 
    InputSearch, 
    SearchIcon,
    BoxProfile, 
    NotificantionsIcon,
    DarkModeIcon,
    InformationIcon
    ,PersonImage
 } from './styles'

import searchIcon from '../../assets/navBar/Search Icon.png'
import person from '../../assets/navBar/pessoa.png'
import notificationIcon from '../../assets/navBar/sino.png'
import DarkModeIco from '../../assets/navBar/lua.png'
import informationIco from '../../assets/informacao.png'

export function NavBar() {
    return(
        <Navigation>
            <BoxTitles>
                <SubTitle>Principal/Dashboard</SubTitle>
                <Title>Velty Dashboard</Title>
            </BoxTitles>
            <SearchBar>
                <BoxSearch> 
                    <SearchIcon src={searchIcon}/>
                    <InputSearch />
                </BoxSearch>

            <BoxProfile>
                <NotificantionsIcon src={notificationIcon}/>
                <DarkModeIcon src={DarkModeIco}/>
                <InformationIcon src={informationIco}/>
                <PersonImage src={person}/>
            </BoxProfile>
            </SearchBar>
        </Navigation>
        )
}
