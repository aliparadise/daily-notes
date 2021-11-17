const notes = [
{   id: 1,
    subject: "Group Project",
    date: 11.12,
    feeling: "take a nap",
    timeSpent: 5,
},    
{
    id: 2,
    subject: "GitHub",
    date: 11.15,
    feeling: "confused, then excited",
    timeSpent: 2, 
},
{
    id: 3,
    subject: "JavaScript",
    date: 11.16,
    feeling: "take it slow",
    timeSpent: 1,
} 
]

const noteAboutToday = {
    id: 4,
    subject: "push method",
    date: 11.17,
    feeling: "read carefully, and don't forget your commas!",
    timeSpent: .30,
}

notes.push(noteAboutToday)

for (const note of notes) {
    console.log(note.date)
}