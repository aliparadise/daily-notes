//const searchTerm = "confused"

const notes = [
{   id: 1,
    subject: "Group Project",
    date: 11.12,
    feeling: "take a nap",
    timeSpent: "five hours",
},    
{
    id: 2,
    subject: "GitHub",
    date: 11.15,
    feeling: "confused",
    timeSpent: "two hours", 
},
{
    id: 3,
    subject: "JavaScript",
    date: 11.16,
    feeling: "take it slow",
    timeSpent: "one hour",
} 
]

const noteAboutToday = {
    id: 4,
    subject: "push method",
    date: 11.17,
    feeling: "read carefully, and don't forget your commas!",
    timeSpent: "30 minutes",
}

notes.push(noteAboutToday)

 for (const note of notes) {
     console.log(`Note ${note.id}
     ${note.date}
     I learned ${note.subject}
     I spent ${note.timeSpent} working on it
     I felt ${note.feeling}
     -----------
     `)
 }

//for (const note of notes) {
    //if (note.feeling === searchTerm) {
        //console.log(note)
    //}
//}

const createNote = (noteObject) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1
    
    noteObject.id = idForNewNote
    notes.push(moreNewerNote)
 }


// Create a new note object
const moreNewerNote = {
    subject: "add id property",
    date: 11.18,
    feeling: "hopeful",
    timeSpent: "30 minutes",
}

// Specify object as argument for function
//         |
//         |
//         V

createNote(moreNewerNote)

console.log(notes)