const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./utils')



yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:"Note Title",
            demandOption: true,
            type: 'string'
        } ,
        description:{
            describe:"Note Description",
            demandOption:true ,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.description)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'

        }
    },
    handler (argv){
       notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'removing a note',
    handler (argv) {
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        }
    } ,

    handler(argv){
        notes.readNote(argv.title)
    }

})

yargs.command({
    command: 'notes',
    describe:'listing notes titles',
    handler(){
        console.log('Your Notes')
    }
})



yargs.parse()
