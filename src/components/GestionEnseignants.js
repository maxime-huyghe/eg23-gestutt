import './GestionEnseignants.css'
import { useState } from 'react'

const GestionEnseignants = () => {
    let [ enseignants, setEnseignants ] = useState([
        {
            nom: 'Dupont',
            prénom: 'Jean',
            type: 'Professeur',
            UEs: [ 'LO12', 'EG23' ],
            hsup: 5,
            date: new Date(2005, 2, 20),
        },
        {
            nom: 'Lefèvre',
            prénom: 'Sylvie',
            type: 'Professeur',
            UEs: [ 'AB12' ],
            hsup: 9,
            date: new Date(2004, 11, 2),
        }
    ])

    const [ ajoutEnseignants, setAjoutEnseignants ] = useState(false)

    const plusClick = () => setAjoutEnseignants(true)
    const validerAjout = () => {
        setEnseignants(ens => {
            const enseignantToAdd = ens[ Math.floor(Math.random() * (ens.length - 1)) ]
            return ens.concat(enseignantToAdd)
        })
        setAjoutEnseignants(false)
    }

    if (ajoutEnseignants) {
        return <div className='ge-root'>
            <h2>Ajouter un enseignant</h2>
            <AjouterEnseignantForm />
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
            <ListeEnseignants enseignants={ enseignants } />
        </div>
    }
}

const ListeEnseignants = ({ enseignants }) =>
    <table className='ge-table'>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Type</th>
                <th>UEs</th>
                <th>Heures sup</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            { enseignants.map(ens =>
                <tr key={ `${ ens.nom }${ ens.prénom }` }>
                    <td>{ ens.nom }</td>
                    <td>{ ens.prénom }</td>
                    <td>{ ens.type }</td>
                    <td>{ ens.UEs.join(', ') }</td>
                    <td>{ ens.hsup }</td>
                    <td>{ `${ ens.date.getDate() }/${ ens.date.getMonth() }/${ ens.date.getFullYear() }` }</td>
                </tr>
            ) }
        </tbody>
    </table>

const AjouterEnseignantForm = () =>
    <form>
        <label htmlFor='nom'>Nom :</label>
        <input type='text' placeholder='Nom' id='nom' />

        <label htmlFor='prenom'>Prénom :</label>
        <input type='text' placeholder='Prénom' id='prenom' />

        <label htmlFor='type'>Type :</label>
        <input type='text' placeholder='Professeur, etc' id='type' />

        <label htmlFor='listeues'>Liste d'UEs :</label>
        <input type='text' placeholder="Liste d\'UEs" id='listeues' />

        <label htmlFor='nbhsup'>Nombre d'heures sup :</label>
        <input type='text' placeholder='...' id='nbhsup' />

        <label htmlFor='date'>Date d'embauche :</label>
        <input type='text' placeholder='15 juin 2021' id='date' />
    </form>

export default GestionEnseignants