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

    const plusClick = () => setEnseignants(enseignants.concat(enseignants[ Math.floor(Math.random() * (enseignants.length - 1)) ]))

    return <div className='ge-root'>
        <h2>Gestion des enseignants</h2>
        <div className='recherche'>
            <input placeholder='Recherche' />
            <b onClick={ plusClick }>+</b>
        </div>
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
    </div>
}
export default GestionEnseignants