import { useState } from 'react'
import { VictoryArea, VictoryAxis, VictoryBar, VictoryChart, VictoryLegend, VictoryStack, VictoryTheme } from 'victory'
import '../css/flex.css'
import EffectifsChart from './EffectifsChart'

const UEData = () => {
    let effectifs = [
        {
            isi: 50,
            rt: 20,
            a2i: 10,
            gi: 5,
        },
        {
            isi: 47,
            rt: 23,
            a2i: 6,
            gi: 9,
        },
        {
            isi: 53,
            rt: 16,
            a2i: 13,
            gi: 8,
        },
        {
            isi: 47,
            rt: 19,
            a2i: 7,
            gi: 4,
        },
        {
            isi: 51,
            rt: 23,
            a2i: 11,
            gi: 8,
        },
    ]

    effectifs = effectifs.concat(effectifs)

    const [ groupEffectifs, setGroupEffectifs ] = useState(false)

    return <div className='outer-flex'>
        <h2>Gestion de l'UE</h2>
        <h3>UE42 - Foobarisation des bazqux</h3>
        <EffectifsChart />
    </div >
}

export default UEData
