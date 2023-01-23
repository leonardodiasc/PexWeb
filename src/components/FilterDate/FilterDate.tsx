import { DateFilter, BoxSearch, DateIcon,InputSearch,Title} from './styles'
import DateIco from '../../assets/data inicial e final.png'

export function FilterDate() {
    return(
    <DateFilter >
        <Title>Filtrar por data</Title>
        <BoxSearch>
            <DateIcon src={DateIco}/>
            <InputSearch placeholder='Data inicial'/>
        </BoxSearch>
        
        <BoxSearch>
            <DateIcon src={DateIco}/>
            <InputSearch placeholder='Data final'/>
        </BoxSearch>

    </DateFilter >
    )
}