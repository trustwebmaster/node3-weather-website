
const fs = require('fs')
const chalk = require("chalk");

const getNotes = () => {
    return "Your Notes......"
}

function loadNotes() {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
         return  JSON.parse(dataJson)
    }catch (e){
        return []
    }
}

  removeNote = (title ) => {
       const notes = loadNotes()
     const selectedNote = notes.filter(  (note) => note.title !== title )

     if (selectedNote){
         saveNotes(selectedNote)
         console.log(chalk.bgRed.bold('No note found'))
     } else{
         console.log(chalk.bgGreen('Note removed'))
     }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    console.log(notes)

    notes.forEach((note) => {
        console.log(chalk.blue.bold(note.title))
    })

}

const addNote =  (title , description) => {
    const  notes = loadNotes()
    const duplicate = notes.filter((note) => note.title === title)
     const duplicateNote = notes.find((note) => note.title === title)
    // const duplicate = notes.filter(function (note){
    //     return note.title === title
    // })

    if (!duplicateNote){
        notes.push({
            title:title,
            description:description
        })

        saveNotes(notes)
        console.log('Note added')

    } else {
        console.log('Title already taken')
    }

}

const readNote = (title) => {
    const notes = loadNotes();
    const selectedNote = notes.find((note) => note.title === title)

   debugger

    if (selectedNote){
        console.log(chalk.green.bold(selectedNote.title))
        console.log(chalk.green.bold(selectedNote.description))
    } else {
        console.log(chalk.red('No note found'))
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , dataJson)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote ,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote
}
