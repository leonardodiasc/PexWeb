import { HeaderCss } from "./headerStyle"

export function Header(){
    return(
        <HeaderCss>
            <div className="headerCss">
                <div className="header">
                    <div className="headerTitulo">
                        <span>Principal/Dashboard</span>
                        <h3>Velty Dashboard</h3>
                    </div>
                    <div className="pesquisa"></div>
                </div>
            </div>

        </HeaderCss>
    )
}