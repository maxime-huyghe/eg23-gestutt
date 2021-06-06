import '../css/flex.css'
import EffectifsChart from './EffectifsChart'
import EncadrementChart from './EncadrementChart'
import reussite from '../reussite.png'

const UEData = () => {
    return <div className='outer-flex'>
        <h2>Gestion de l'UE</h2>
        <h3>UE42 - Foobarisation des bazqux</h3>
        <EffectifsChart />
        <EncadrementChart />
        <div style={ { width: '100%', display: 'flex' } }>
            <h4>Taux de réussite :</h4>
        </div>
        <img src={ reussite } ></img>
    </div >
}

export default UEData
