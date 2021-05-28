import Header from './components/Header'
import Menu from './components/Menu'
import './App.css'
import { Route, Switch } from 'react-router'
import Routes from './routes'
import GestionEnseignants from './components/GestionEnseignants'

function App() {
    return (
        <div className="App">
            <Header />

            <Switch>

                <Route exact path={ Routes.slash }>
                    <Menu />
                </Route>

                <Route path={ Routes.gestionEnseignants }>
                    gestionEnseignants
                </Route>

                <Route path={ Routes.gestionUE }>
                    ue
                </Route>

                <Route path={ Routes.etuNiveaux }>
                    niveaux
                </Route>

                <Route path={ Routes.etuCategorie }>
                    categorie
                </Route>

                <Route path={ Routes.statsFlux }>
                    stats
                </Route>

                <Route path={ Routes.semestreExcellence }>
                    excellence
                </Route>

                <Route path={ Routes.semestreRetard }>
                    retard
                </Route>
            </Switch>
        </div>
    )
}

export default App
