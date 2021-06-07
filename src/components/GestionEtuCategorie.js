import '../css/flex.css'
import image from '../repartition_etu_categorie.svg'
import './GestionEtu.css'

const GestionEtuCategorie = () => {
    return <div className='outer-flex' id="graph" >
        <h2>Répartition des étudiant par catégorie</h2>
        <img src={ image } width="50%" ></img>
    </div >
}

export default GestionEtuCategorie
