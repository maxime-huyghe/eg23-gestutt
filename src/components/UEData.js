import { useState } from 'react'
import { VictoryArea, VictoryAxis, VictoryBar, VictoryChart, VictoryLegend, VictoryStack, VictoryTheme } from 'victory'
import '../css/flex.css'

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
        <div style={ { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingInlineEnd: '20px' } }>
            <h4>Évolution des effectifs :</h4>
            <label>
                <input type='checkbox' checked={ groupEffectifs } onChange={ () => setGroupEffectifs(x => !x) } />
                Regrouper
            </label>
        </div>
        <VictoryChart
            theme={ VictoryTheme.material }
            domainPadding={ 20 }
            width={ 800 }
            height={ 400 }
        >
            <VictoryAxis
                tickValues={ effectifs.map((_, idx) => idx) }
                tickFormat={ x => 2010 + x }
            />
            <VictoryAxis
                dependentAxis={ true }
            />

            {
                groupEffectifs
                    ?
                    <VictoryArea
                        data={ effectifs.map(ef => Object.values(ef).reduce((x, y) => x + y)) }
                        y='isi'
                    />
                    :
                    [
                        <VictoryLegend
                            x={ 100 }
                            title='Légende'
                            centerTitle={ true }
                            orientation='horizontal'
                            data={ [
                                { name: 'ISI' },
                                { name: 'RT' },
                                { name: 'A2I' },
                                { name: 'GI' },
                            ] }
                        />,
                        <VictoryStack>
                            <VictoryArea
                                data={ effectifs }
                                y='isi'
                            />
                            <VictoryArea
                                data={ effectifs }
                                y='rt'
                            />
                            <VictoryArea
                                data={ effectifs }
                                y='a2i'
                            />
                            <VictoryArea
                                data={ effectifs }
                                y='gi'
                            />
                        </VictoryStack>
                    ]
            }
        </VictoryChart>
    </div >
}

export default UEData
