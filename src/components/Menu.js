import './Menu.css'
import LinkButton from './LinkButton'
import Routes from '../routes'

function Menu() {
    return (
            <div className='menu-container menu-root'>
                <LinkButton to={ Routes.gestionEnseignants } className='menu-item'>
                    Gestion des enseignants
                </LinkButton>

                <LinkButton to={ Routes.gestionUE } className='menu-item'>
                    Gestion des UEs
                </LinkButton>

                <fieldset className='menu-container menu-item'>
                    <legend>
                        Répartition des étudiants
                    </legend>

                    <LinkButton to={ Routes.etuNiveaux } className='menu-item'>
                        Répartition par niveau
                    </LinkButton>

                    <LinkButton to={ Routes.etuCategorie } className='menu-item'>
                        Répartition par catégorie
                    </LinkButton>

                </fieldset>

                <LinkButton to={ Routes.statsFlux } className='menu-item'>
                    Statistiques des flux entrants et sortants
                </LinkButton>

                <fieldset className='menu-container menu-item'>
                    <legend>
                        Gestion du semestre en cours
                    </legend>

                    <LinkButton to={ Routes.semestreExcellence } className='menu-item'>
                    Étudiants candidats à l'excellence
                    </LinkButton>

                    <LinkButton to={ Routes.semestreRetard } className='menu-item'>
                    Étudiants en retard
                    </LinkButton>

                </fieldset>
        </div>
    )
}

export default Menu
