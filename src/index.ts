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
for (let i = 0; i < clips.length; i++ ) {
    
    let currentClip = clips[i];

    //! PSEUDO-CODE
    /* if (clip[i].origin != "project-directory/**_Musik") {
        return
    }
    title = currentClip.name;
    artist = currentClip.artist;
    domain = '';
    duration = currentClip.outPoint - currentClip.inpoint;           //Format to seconds
    if(data.exist(currentClip.name){
        data[data.getIndexForClip(currentClip.name)].duration += duration;
        return;
    }
    const DATA_ROW = [ { value: title }, { value: artist },{ value: domain },{ value: duration }];
    
    data.push(DATA_ROW);
    */

}

xlWrite(data, {
    filePath: "test.xlsx"
})