var xlWrite = require('write-excel-file/node')


const HEADER_ROW = [
    {
        value: 'Titel',
        fontWeight: 'bold'
    },
    {
        value: 'Interpret',
        fontWeight: 'bold'
    },
    {
        value: 'Domain',
        fontWeight: 'bold'
    },
    {
        value: 'Dauer',
        fontWeight: 'bold'
    }
]

//title | Artist | Domain | Duration
let title = 'Avalanche'
let artist = 'Bring Me The Horizon'
let domain = 'Spotify'
let duration = '100s'

const DATA_ROW = [ { value: title }, { value: artist },{ value: domain },{ value: duration }]

let data:Array<Array<Object>> = [
    HEADER_ROW
]

data.push(DATA_ROW)
// const HEADER_ROW = ['Titel', 'Interpret', 'Domain', 'Dauer']
// const DATA_ROW1 = ['Avalanche', 'Bring Me The Horizon', 'Spotify', '100s']

xlWrite(data, {
    filePath: "test.xlsx"
})