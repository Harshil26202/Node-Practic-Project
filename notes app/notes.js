const fs = require('fs');

const getNotes = () => {
    return "Your notes...";
}


const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((notes) => notes.title === title)
    debugger
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
    }
    else{
        console.log('Already Exist!')
    }
    
}   


const removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (notes) {
        return notes.title !== title
    })
    saveNotes(notesToKeep)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}
const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });

}

const readNote = (title) => {
    const notes = loadNotes()
    const targetNode = notes.find((note) => note.title === title)
    if(targetNode){
        console.log(targetNode.title)
        console.log(targetNode.body)
    }
    else{
        console.log('No node found')
    }
}
module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNotes:removeNotes,
    listNotes: listNotes,
    readNote:readNote
}