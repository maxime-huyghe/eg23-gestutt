import '../css/flex.css'
import image from '../repartition_etu_niveau.svg'
import './GestionEtu.css'

const GestionEtuNiveau = () => {
    return <div className='outer-flex' id="graph" >
        <h2>Répartition des étudiants par niveaux</h2>
        <img src={ image } width="50%" ></img>
    </div >
}

export default GestionEtuNiveau
