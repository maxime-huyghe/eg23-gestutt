import './App.css'
import { Route, Switch } from 'react-router'
import Header from './components/Header'
import Menu from './components/Menu'
import Routes from './routes'
import GestionEnseignants from './components/GestionEnseignants'
import GestionUEs from './components/GestionUEs'
import Title from './components/Title'
import UEData from './components/UEData'

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
                    niveaux
                </Route>

                <Route exact path={ Routes.etuCategorie }>
                    categorie
                </Route>

                <Route exact path={ Routes.statsFlux }>
                    stats
                </Route>

                <Route exact path={ Routes.semestreExcellence }>
                    excellence
                </Route>

                <Route exact path={ Routes.semestreRetard }>
                    retard
                </Route>
            </Switch>
        </div>
    )
}

export default App
