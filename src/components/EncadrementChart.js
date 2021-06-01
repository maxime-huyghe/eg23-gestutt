import { VictoryArea, VictoryAxis, VictoryChart, VictoryLegend, VictoryStack, VictoryTheme } from "victory"

const EncadrementChart = () => {
    let encadrement = [
        {
            disponible: 8,
            occupé: 62,
        },
        {
            disponible: 1,
            occupé: 69,
        },
        {
            disponible: 0,
            occupé: 70,
        },
        {
            disponible: 12,
            occupé: 68,
        },
        {
            disponible: 0,
            occupé: 80,
        },
        {
            disponible: 5,
            occupé: 75,
        },
        {
            disponible: 0,
            occupé: 80,
        },
        {
            disponible: 10,
            occupé: 70,
        },
        {
            disponible: 0,
            occupé: 80,
        },
        {
            disponible: 2,
            occupé: 78,
        },
    ]

    return <div>
        <div style={ { width: '100%', display: 'flex' } }>
            <h4>Taux d'encadrement :</h4>
        </div>
        <VictoryChart
            theme={ VictoryTheme.material }
            domainPadding={ 20 }
            width={ 800 }
            height={ 500 }
        >
            <VictoryAxis
                tickValues={ encadrement.map((_, idx) => idx) }
                tickFormat={ x => 2010 + x }
            />
            <VictoryAxis
                dependentAxis={ true }
            />

            <VictoryLegend
                x={ 100 }
                title='Légende'
                centerTitle={ true }
                orientation='horizontal'
                data={ [
                    { name: 'Occupé' },
                    { name: 'Libre' },
                ] }
            />

            <VictoryStack>
                <VictoryArea
                    data={ encadrement }
                    y='occupé'
                />
                <VictoryArea
                    data={ encadrement }
                    y='disponible'
                />
            </VictoryStack>
        </VictoryChart>
    </div>
}

export default EncadrementChart
