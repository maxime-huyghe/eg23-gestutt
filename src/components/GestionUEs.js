import { useState } from "react"
import Routes from "../routes"
import "../css/flex.css"
import "../css/button.css"
import LinkButton from "./LinkButton"

const GestionUEs = () => {
    // Usestate with a function arg allows us to compute the array only once
    const [ UEs, _ ] = useState(() => {
        const UEs = [
            `UE01 - Exemple dans le cadre d'un projet`,
            `UE02 - Autre exemple de description`,
        ]
        return UEs.concat(UEs).concat(UEs)
    })

    return <div className='outer-flex'>
        <h2>Gestion des UEs</h2>
        <input placeholder='Recherche' />
        { UEs.map(ue =>
            <LinkButton to={ Routes.ueData } >
                { ue }
            </LinkButton>
        ) }
    </div >
}

export default GestionUEs
