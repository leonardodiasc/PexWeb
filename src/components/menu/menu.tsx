import { MenuBox, MenuCss } from "./menustyle";
import logopex from "../../assets/menu/logo-pex.png"
import dashboard from "../../assets/menu/dashboard.png"
import carrinho from "../../assets/menu/carrinho.png"
import cliente from "../../assets/menu/cliente.png"
import lojas from "../../assets/menu/lojas.png"
import barrinhas from "../../assets/menu/barrinhas.png"

export function Menu(){
    return(
        <MenuBox>
        <MenuCss>
            <header>
                    <div className="logo">
                        <img src={logopex} alt="" />
                    </div>
                    <div className="menu">
                        <nav>
                            <li>
                                <img src={dashboard} alt="" />
                                <span className="selecionado">Dashboard</span>
                            </li>            
                            <li>
                                <img src={carrinho} alt="" />
                                <span>Vendas</span>
                            </li>            
                            <li>
                                <img src={barrinhas} alt="" />
                                <span>Relatorios</span>
                            </li>            
                            <li>
                                <img src={lojas} alt="" />
                                <span>Lojas Parceiras</span>
                            </li>            
                            <li>
                                <img src={cliente} alt="" />
                                <span>Clientes</span>
                            </li>            
                        </nav>
                    </div>
            </header>
        </MenuCss>
        </MenuBox>
    )
}