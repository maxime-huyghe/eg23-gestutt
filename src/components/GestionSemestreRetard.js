import './GestionSemestre.css'

const GestionSemestreRetard = () => {
    let etudiants = [
        {
            nom: 'Dupond',
            prenom: 'Jean',
            retardCS: '1',
            retardTM: '2',
            status: "critique"
        },
        {
            nom: 'Doe',
            prenom: 'John',
            retardCS: '1',
            retardTM: '2',
            status: "critique"
        },
        {
            nom: 'Martin',
            prenom: 'Julie',
            retardCS: '1',
            retardTM: '2',
            status: "retard"
        },
        {
            nom: 'Dupont',
            prenom: 'Jacques',
            retardCS: '1',
            retardTM: '2',
            status: "ok"
        },
    ]

    return <div className='ge-root'>
        <h2>Étudiants en retard</h2>
        <div className='recherche'>
            <input placeholder='Recherche' />
        </div>
        <div className='legend-container'>
            <div>
                <span className='legend ok'>
                    OK
                </span>
                Retard de 0 ou 1 UE
            </div>
            <div>
                <span className='legend retard'>
                    ?
                </span>
                Retard de plus d'une UE mais plus de 50% de validation
            </div>
            <div>
                <span className='legend critique'>
                    !
                </span>
                Retard critique (moins de 50% de validation)
            </div>
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
                <th>Prénom</th>
                <th>Retard CS</th>
                <th>Retard TM</th>
            </tr>
        </thead>
        <tbody>
            { etudiants.map((etu, idx) =>
                <tr key={ idx } className={ etu.status }>
                    <td>{
                        (() => {
                            switch (etu.status) {
                                case 'critique':
                                    return '!'
                                case 'retard':
                                    return '?'
                                case 'ok':
                                    return 'OK'
                            }
                        })()
                    }</td>
                    <td>{ etu.nom }</td>
                    <td>{ etu.prenom }</td>
                    <td>{ etu.retardCS }</td>
                    <td>{ etu.retardTM }</td>
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

export default GestionSemestreRetard
