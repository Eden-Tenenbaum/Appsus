
import { noteService } from '../../../services/note.services.js'
import { NotePreview } from '../cmps/NotePreview.jsx'

const { useEffect, useState } = React
// const [notes, setNotes] = useState([])


export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const [newTxt, setNewTxt] = useState('')
    useEffect(() => {
        noteService.query().then(setNotes)
    }, [])
    function onAddNote() {
        if (!newTxt.trim()) return

        const newNote = {
            type: 'NoteTxt',
            isPinned: false,
            info: { txt: newTxt },
        }
        noteService.save(newNote).then(savedNote => {
            setNotes(prev => [...prev, savedNote])
            setNewTxt('')
        })
    }

    return (
        <section className="note-index">
            <h2>MissKeep Notes</h2>
            <section className="note-add">
                <input
                    type='text'
                    placeholder='Take a note...'
                    value={newTxt}
                    onChange={(ev) => setNewTxt(ev.target.value)}
                    onKeyDown={(ev) => { if (ev.key === "Enter") onAddNote() }}
                />
                <button onClick={onAddNote}>Add</button>
            </section>
            <div className="note-list">
                {notes.map(note => (
                    <NotePreview key={note.id} note={note} />
                ))}
            </div>
        </section>)
}

