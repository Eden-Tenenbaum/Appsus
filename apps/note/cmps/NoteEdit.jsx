import { noteService } from "../../../services/note.service.js";

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function NoteEdit() {
    const [noteToEdit, setNoteToEdit] = useState(null)
    const { noteId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (noteId) {
            noteService.get(noteId).then(setNoteToEdit)
        } else {
            setNoteToEdit({
                type: 'NoteTxt',
                isPinned: false,
                info: { txt: '' },
            })
        }
    }, [])

    function handleChange({ target }) {
        const value = target.value
        setNoteToEdit(prev => ({
            ...prev,
            info: { ...prev.info, txt: value }
        }))
    }
    function onSaveNote(ev) {
        ev.preventDefault()
        noteService.save(noteToEdit).then(() => navigate('/note'))
    }

    if (!noteToEdit) return <div>Loading...</div>

    return (
        <section className="note-edit">
            <h2>{noteId ? 'Edit Note' : 'New Note'}</h2>
            <form onSubmit={onSaveNote}>
                <label>Note Text</label>
                <input
                    type='text'
                    value={noteToEdit.info.txt}
                    onChange={handleChange}
                />
                <div>
                    <button type="submit">Save</button>
                    <Link to='/note'><button type="button">Cancel</button></Link>
                </div>
            </form>
        </section>
    )
}

