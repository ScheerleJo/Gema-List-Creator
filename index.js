const xlWrite = require('write-excel-file/node')
const xlRead = require('read-excel-file/node')

/*
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

const DATA_ROW1 = [
    {
        value: 'Avalanche'
    },
    {    
        value: 'Bring Me The Horizon'
    },
    {
        value: 'Spotify'
    },   
    {
        value: '100s'
    }
]
*/

var data = {
    HEADER_ROW,
    DATA_ROW1
}


console.log("Hi")
console.log("Hi")
xlWrite(data, {
    filePath: "text.xlsx"
})