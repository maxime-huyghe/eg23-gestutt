// Having the routes in an object like this gives us autocompletion
// and ensures route names are the same everywhere.

const gestionUE = '/gestionUE'

const Routes = {
    slash: '/',
    gestionEnseignants: '/gestionEnseignants',
    gestionUE,
    ueData: `${ gestionUE }/data`,
    etuNiveaux: '/etuNiveaux',
    etuCategorie: '/etuCategorie',
    statsFlux: '/statsFlux',
    semestreExcellence: '/semestreExcellence',
    semestreRetard: '/semestreRetard',
}

export default Routes