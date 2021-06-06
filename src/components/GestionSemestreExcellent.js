import './GestionSemestre.css'

const GestionSemestreExcellent = () => {
    let etudiants = [
        {
            nom: 'Jacques',
            prenom: 'test',
            retardCS: '1',
            retardTM: '2',
            status: "excellent"
        },
        {
            nom: 'Julie',
            prenom: 'test',
            retardCS: '1',
            retardTM: '2',
            status: "excellent"
        },
        {
            nom: 'Julie',
            prenom: 'test',
            retardCS: '1',
            retardTM: '2',
            status: "excellent"
        },
        {
            nom: 'Julie',
            prenom: 'test',
            retardCS: '1',
            retardTM: '2',
            status: "excellent"
        }
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
                <th>Status</th>
                <th>Nom</th>
                <th>Retard</th>
            </tr>
        </thead>
        <tbody>
            { etudiants.map(ens =>
                <tr key={ `${ ens.nom }${ ens.prénom }` } className={ ens.status }>
                    <td>{ ens.status }</td>
                    <td>{ ens.nom } { ens.prenom }</td>
                    <td>{ ens.retardCS } CS | { ens.retardTM } TM</td>
                </tr>
            ) }
        </tbody>
    </table>

export default GestionSemestreExcellent
