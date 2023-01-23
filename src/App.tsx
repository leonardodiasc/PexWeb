import GlobalStyled from "./GlobalStyled"
import { Menu } from "./components/menu/menu"
import { NavBar } from "./components/NavBar"
import { FilterDate } from "./components/FilterDate"
import { FinancialBox } from "./components/FinancialCard/styles"
import { FinancialCard } from "./components/FinancialCard"
import mAzul from './assets/mazul.png'
import mVerde from './assets/mverde.png'
import mVermelho from './assets/mvermelho.png'
import { ClientCard } from "./components/ClientCard"
import { ClientBox } from "./components/ClientCard/styles"
import { BalanceCard } from "./components/BalanceCard"
import { BalanceBox } from "./components/BalanceCard/styles"
import { ComplexCard } from "./components/ComplexCard"

function App() {
 return(
  <>
    <GlobalStyled/>
    <header>
      <Menu/>
    </header>
    <main>      
      <NavBar />
      <FilterDate />

      <FinancialBox>
        <FinancialCard totalPrice='R$ 312.321,00' icon={mVermelho} color='red' totalTitle='Receita total' averagePrice='R$ 67,20' averageTitle='Média por cliente'/>
        <FinancialCard totalPrice='R$ 74.421,00' icon={mAzul} color='blue' totalTitle='Lucro total' averagePrice='R$ 42,30' averageTitle='Média por cliente'/>
        <FinancialCard totalPrice='R$ 3,12' icon={mVerde} color='green' totalTitle='Lucro por venda' averagePrice='R$ 12,40' averageTitle='Média por cliente'/>
      </FinancialBox>
      <ClientBox>
        <ClientCard lessThanZero={false} percentage="+2,6%(+12)" number="3.312" title="Clientes ativos" />
        <ClientCard lessThanZero={false} percentage="+2,6%(+12)" number="12" title="Novos clientes" />
        <ClientCard lessThanZero={false} percentage="+42,6%(+8) " number="42" title="Clientes adicionados" />
        <ClientCard lessThanZero={true}  percentage="-22,6%(+R$ 12,20)" number="R$ 142,32" title="LTV" />
        <ClientCard lessThanZero={false} percentage="+42,6% (+3)" number="24,3%" title="Turnover" />
        <ClientCard  lessThanZero={false} percentage="+32,6% (+6)" number="54,42%" title="Turnover recuperado" />
      </ClientBox>
      <BalanceBox>
        <BalanceCard number="312.321" text="Cotações realizadas" percentage="+15,3%(+223)" ></BalanceCard>
        <BalanceCard number="212.012" text="Vendas finalizadas" percentage="+15,3%(+223)" ></BalanceCard>
        <BalanceCard number="42.021" text="Cotações não concluídas" percentage="+15,3%(+223)" ></BalanceCard>
        <BalanceCard number="3.122" text="Cotações não respondidas" percentage="+15,3%(+223)" ></BalanceCard>
      </BalanceBox>

      <ComplexCard />
      
    </main>
  </>
    )
}

export default App
