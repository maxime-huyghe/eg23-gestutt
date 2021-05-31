import './App.css'
import { Route, Switch } from 'react-router'
import Header from './components/Header'
import Menu from './components/Menu'
import Routes from './routes'
import GestionEnseignants from './components/GestionEnseignants'
import GestionUEs from './components/GestionUEs'

function App() {
    return (
        <div className="App">
            <Header />

            <Switch>

                <Route exact path={ Routes.slash }>
                    <Menu />
                </Route>

                <Route exact path={ Routes.gestionEnseignants }>
                    <GestionEnseignants />
                </Route>

                <Route exact path={ Routes.gestionUE }>
                    <GestionUEs />
                </Route>

                <Route exact path={ Routes.ueData }>
                    data
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
