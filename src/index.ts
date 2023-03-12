const xlWrite = require('write-excel-file/node')
const fs = require('fs')

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
        value: 'Dauer in s',
        fontWeight: 'bold'
    }
]
let clips:Array<Object>

//title | Artist | Domain | Duration
let title:String
let artist:String
let domain:String
let duration:Number

let data:Array<Array<Object>> = [
    HEADER_ROW
]
//! PSEUDO-CODE

/*
let project = app.project
clips = project.clips

fs.readdir(project.directory +  '/**_Musik', function(error, files){        // Project-Directory is Standard in .../01_Premiere --> has to be removed

    if (error) {
        return alert('Unable to scan directory: ' + error);
    } 

    let i:number = 0

    files.array.forEach(element => {
        let currentClip = clips[i]

        if (element != currentClip.origin) {
            return
        }
        
        title = currentClip.name
        artist = currentClip.artist
        domain = ''
        duration = currentClip.outPoint - currentClip.inpoint           //Format to seconds
        if(data.exist(currentClip.name){
            data[data.getIndexForClip(currentClip.name)].duration += duration
            return;
        }
        const DATA_ROW = [ { value: title }, { value: artist },{ value: domain },{ value: duration }]
        
        data.push(DATA_ROW)

        i++
    });

})
*/

xlWrite(data, {
    filePath: "test.xlsx"
})