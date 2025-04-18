
import { noteService } from '../../../services/note.services.js'
import { NotePreview } from '../cmps/NotePreview.jsx'

const { useEffect, useState } = React


export function NoteIndex() {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        noteService.query().then(setNotes)
},[])

     
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
