import '../css/flex.css'
import image from '../stats_entree_sorties.svg'
import './GestionEtu.css'

const StatistiqueEntreeSortie = () => {
    return <div className='outer-flex' id="graph" >
        <h2>Statistiques Entrées/Sorties</h2>
        <img src={ image } width="100%" ></img>
    </div >
}

export default StatistiqueEntreeSortie
