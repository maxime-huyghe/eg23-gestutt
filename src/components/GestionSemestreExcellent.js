import './GestionSemestre.css'

const GestionSemestreExcellent = () => {
    let etudiants = [
        {
            nom: 'Dupont',
            prenom: 'Jacques',
            a: 9,
            b: 9,
        },
        {
            nom: 'Dupond',
            prenom: 'Marie',
            a: 11,
            b: 7,
        },
        {
            nom: 'Dupont',
            prenom: 'Jacques',
            a: 9,
            b: 9,
        },
        {
            nom: 'Dupond',
            prenom: 'Marie',
            a: 11,
            b: 7,
        },
        {
            nom: 'Dupont',
            prenom: 'Jacques',
            a: 9,
            b: 9,
        },
        {
            nom: 'Dupond',
            prenom: 'Marie',
            a: 11,
            b: 7,
        },
    ]

    return <div className='ge-root'>
        <h2>Gestion du semestre par excellence</h2>
        <div className='recherche'>
            <input placeholder='Recherche' />
        </div>
        <ListeEtudiants etudiants={ etudiants } />
    </div>
}

const ListeEtudiants = ({ etudiants }) =>
    <table className='ge-table'>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Nombre de A</th>
                <th>Nombre de B</th>
            </tr>
        </thead>
        <tbody>
            { etudiants.map((etu, idx) =>
                <tr key={ idx }>
                    <td>{ etu.nom }</td>
                    <td>{ etu.prenom }</td>
                    <td>{ etu.a }</td>
                    <td>{ etu.b }</td>
                </tr>
            ) }
        </tbody>
    </table>

export default GestionSemestreExcellent
