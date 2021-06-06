import './App.css'
import { Route, Switch } from 'react-router'
import Header from './components/Header'
import Menu from './components/Menu'
import Routes from './routes'
import GestionEnseignants from './components/GestionEnseignants'
import GestionUEs from './components/GestionUEs'
import Title from './components/Title'
import UEData from './components/UEData'
import GestionEtuNiveau from './components/GestionEtuNiveau'
import GestionEtuCategorie from './components/GestionEtuCategorie'
import StatistiqueEntreeSortie from './components/StatsEntreeSorties'
import GestionSemestreExcellent from './components/GestionSemestreExcellent'
import GestionSemestreRetard from './components/GestionSemestreRetard'

function App() {
    const gestUtt = `Gest'UTT`

    return (
        <div className="App">
            <Header />

            <Switch>

                <Route exact path={ Routes.slash }>
                    <Title is={ gestUtt } />
                    <Menu />
                </Route>

                <Route exact path={ Routes.gestionEnseignants }>
                    <Title is={ `${ gestUtt } - Gestion des enseignants` } />
                    <GestionEnseignants />
                </Route>

                <Route exact path={ Routes.gestionUE }>
                    <Title is={ `${ gestUtt } - Gestion des UEs` } />
                    <GestionUEs />
                </Route>

                <Route exact path={ Routes.ueData }>
                    <Title is={ `${ gestUtt } - Gestion de l'UE` } />
                    <UEData />
                </Route>

                <Route exact path={ Routes.etuNiveaux }>
                    <Title is={ `${ gestUtt } - Répartition des étudiant par niveaux` } />
                    <GestionEtuNiveau />
                </Route>

                <Route exact path={ Routes.etuCategorie }>
                    <Title is={ `${ gestUtt } - Répartition des étudiant par catégorie` } />
                    <GestionEtuCategorie />
                </Route>

                <Route exact path={ Routes.statsFlux }>
                    <Title is={ `${ gestUtt } - Statistiques Entrées sorties` } />
                    <StatistiqueEntreeSortie />
                </Route>

                <Route exact path={ Routes.semestreExcellence }>
                    <Title is={ `${ gestUtt } - Gestion du semestre en cours` } />
                    <GestionSemestreExcellent />
                </Route>

                <Route exact path={ Routes.semestreRetard }>
                    <Title is={ `${ gestUtt } - Gestion du semestre en cours` } />
                    <GestionSemestreRetard />
                </Route>
            </Switch>
        </div>
    )
}

export default App
