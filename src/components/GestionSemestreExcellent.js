import { useState } from 'react'
import './GestionSemestreExcellent.css'

const GestionSemestreExcellent = () => {
    let [ etudiants, setEtudiants ] = useState([
        {
            nom: 'Jacques',
            prenom: 'test',
            retardCS: '1',
            retardTM: '2',
            status: "OK"
        },
        {
            nom: 'Julie',
            prenom: 'test',
            retardCS: '1',
            retardTM: '2',
            status: "unknown"
        },
        {
            nom: 'Julie',
            prenom: 'test',
            retardCS: '1',
            retardTM: '2',
            status: "attention"
        },
        {
            nom: 'Julie',
            prenom: 'test',
            retardCS: '1',
            retardTM: '2',
            status: "excellent"
        }
    ])

    const [ ajoutEtudiants, setAjoutEtudiants ] = useState(false)

    const plusClick = () => setAjoutEtudiants(true)
    const validerAjout = () => {
        setEtudiants(ens => {
            const etudiantToAdd = ens[ Math.floor(Math.random() * (ens.length - 1)) ]
            return ens.concat(etudiantToAdd)
        })
        setAjoutEtudiants(false)
    }

    if (ajoutEtudiants) {
        return <div className='ge-root'>
            <h2>Ajouter un enseignant</h2>
            <AjouterEtudiantsForm />
            <button onClick={ validerAjout }>
                Valider
            </button>
        </div>
    } else {
        return <div className='ge-root'>
            <h2>Gestion des enseignants</h2>
            <div className='recherche'>
                <input placeholder='Recherche' />
                <b onClick={ plusClick }>+</b>
            </div>
            <ListeEtudiants etudiants={ etudiants } />
        </div>
    }
}

const ListeEtudiants = ({ etudiants }) =>
    <table className='ge-table'>
        <thead>
            <tr>
                <th>Status</th>
                <th>Nom</th>
                <th>Retard</th>
            </tr>
        </thead>
        <tbody>
            { etudiants.map(ens =>
                <tr key={ `${ ens.nom }${ ens.prénom }` } class={ ens.status }>
                    <td>{ ens.status }</td>
                    <td>{ ens.nom } { ens.prenom }</td>
                    <td>{ ens.retardCS } CS | { ens.retardTM } TM</td>
                </tr>
            ) }
        </tbody>
    </table>

const AjouterEtudiantsForm = () =>
    <form>
        <label htmlFor='nom'>Nom :</label>
        <input type='text' placeholder='Nom' id='nom' />

        <label htmlFor='prenom'>Prénom :</label>
        <input type='text' placeholder='Prénom' id='prenom' />

        <label htmlFor='retardCS'>retardCS :</label>
        <input type='text' placeholder='0' id='retardCS' />

        <label htmlFor='retardTM'>retardTM :</label>
        <input type='text' placeholder='0' id='retardTM' />

        <label htmlFor='status'>status :</label>
        <input type='text' placeholder='OK' id='status' />

    </form>

export default GestionSemestreExcellent
