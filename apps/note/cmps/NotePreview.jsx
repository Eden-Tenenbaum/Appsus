

export function NotePreview({ note, onEdit, onDelete }) {
    const DynamicCmp = getCmp(note.type)

    return <div className="note-preview" style={{ backgroundColor: note.style && note.style.backgroundColor }}>
        <DynamicCmp info={note.info} />
        <div className="note-action">
            <button onClick={onEdit}>edit</button>
            <button onClick={onDelete}>delete</button>
        </div>
    </div>
}

function getCmp(type) {
    switch (type) {
        case 'NoteTxt':
            return NoteTxt
        case 'NoteImg':
            return NoteImg
        case 'NoteTodos':
            return NoteTodos
        default:
            return () => <div>Unknown note type</div>
    }
}

function NoteTxt({ info }) {
    return <div className="note">
        <div className="note-txt">{info.txt}</div>
    </div>
}

function NoteImg({ info }) {
    return <div className="note">
        <h4 className="note-title">{info.title}</h4>
        <img src={info.url} alt={info.alt} />
    </div>
}


function NoteTodos({ info }) {
    return <div className="note">
        <h4 className="note-title">{info.title}</h4>
        <ul>
            {info.todos.map((todo, idx) => (
                <li key={idx}
                    className={todo.doneAt ? 'line-through' : 'none'}>
                    <div className="note-txt">
                        {todo.txt}
                    </div>
                </li>
            ))}
        </ul>
    </div>
} 