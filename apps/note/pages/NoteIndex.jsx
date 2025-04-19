
import { noteService } from '../../../services/note.service.js'
import { getTruthyValues } from '../../../services/util.service.js'
import { NotePreview } from '../cmps/NotePreview.jsx'



const { useEffect, useState } = React
const { Link, useSearchParams, useNavigate } = ReactRouterDOM


export function NoteIndex() {

    const [notes, setNotes] = useState([])
    const [newTxt, setNewTxt] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        setSearchParams(getTruthyValues({}))
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

    function onSetNoteColor(noteId, color) {
        const noteToUpdate = notes.find(note => note.id === noteId)
        const updateNote = {
            ...noteToUpdate,
            style: { ...noteToUpdate.style, backgroundColor: color }
        }
        noteService.save(updateNote).then(() => {
            setNotes(prevNotes =>
                prevNotes.map(note =>
                    note.id === noteId ? updateNote : note
                )
            )
        })
    }

    function onDeleteNote(noteId) {
        noteService.remove(noteId).then(() => {
            setNotes(prev => prev.filter(note => note.id !== noteId))
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
                    <NotePreview
                        key={note.id}
                        note={note}
                        onDelete={() => onDeleteNote(note.id)}
                        onEdit={() => navigate(`/note/edit/${note.id}`)}
                        onSetColor={(color) => onSetNoteColor(note.id, color)} />
                ))}
            </div>
        </section>)
}

