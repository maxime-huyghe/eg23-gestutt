import { useState } from 'react'
import { VictoryArea, VictoryAxis, VictoryBar, VictoryChart, VictoryLegend, VictoryStack, VictoryTheme } from 'victory'
import '../css/flex.css'
import EffectifsChart from './EffectifsChart'
import EncadrementChart from './EncadrementChart'

const UEData = () => {
    return <div className='outer-flex'>
        <h2>Gestion de l'UE</h2>
        <h3>UE42 - Foobarisation des bazqux</h3>
        <EffectifsChart />
        <EncadrementChart />
    </div >
}

export default UEData
