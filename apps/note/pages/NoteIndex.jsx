
import { NotePreview } from '../cmps/NotePreview.jsx'

const { useEffect, useState } = React


export function NoteIndex() {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        const hardcodedNotes = [
            {
                id: 'n101',
                type: 'NoteTxt',
                isPinned: true,
                style: { backgroundColor: '#f28b82' },
                info: { txt: 'fullstack Me Baby!' }
            },
            {
                id: 'n102',
                type: 'NoteImg',
                isPinned: false,
                style: { backgroundColor: '#d7aefb' },
                info: { url: '', alt: 'image-placeholder', title: 'Cute Kitten' }
            },
            {
                id: 'n103',
                type: 'NoteTodos',
                isPinned: false,
                style: { backgroundColor: '#fff475' },
                info: {
                    title: 'Get my stuff together',
                    todos: [
                        { txt: 'Driving license', doneAt: null },
                        { txt: 'Coding power', doneAt: 187111111 }
                    ]
                }
            }
        ]
        setNotes(hardcodedNotes)
    }, [])

    return (
        <section className="note-index">
            <h2>MissKeep Notes</h2>
            <div className="note-list">
                {notes.map(note => (
                    <NotePreview key={note.id} note={note} />
                ))}
            </div>
        </section>)
}
