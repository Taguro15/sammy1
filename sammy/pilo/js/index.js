JSC.chart('chartDiv', {
    type: 'column roundCaps ',
    series: [
        {
            name: 'emotion', 
            points: [
                { x: 'sad', y: '46' }, 
                { x: 'happy', y: '20' },
                { x: 'bored', y: '15' },
            ]
        },{
            name: 'name',
            points: [
                { x: 'juan', y: '35'},
                { x: 'pedro', y: '45'},
                { x: 'tamad', y: '60'},
            ]
        },{
            name: 'games',
            points: [
                { x: 'coc', y: '67'},
                { x: 'cod', y: '45'},
                { x: 'ml', y: '80'},
            ]
        }
    ]
});