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
    feeling: "confused, then excited",
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