

export function NotePreview({ note }) {
    const DynamicCmp = getCmp(note.type)

    return <article className="note-preview" style={{ backgroundColor: note.style && note.style.backgroundColor }}>
        <DynamicCmp info={note.info} />
    </article>
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
    return <p>{info.txt}</p>
}

function NoteImg({ info }) {
    return <div>
        <h4>{info.title}</h4>
        <img src={info.url} alt={info.alt} style={{ maxWidth: '100%' }} />
    </div>
}


function NoteTodos({ info }) {
    return <div>
        <h4>{info.title}</h4>
        <ul>
            {info.todos.map((todo, idx) => (
                <li key={idx} style={{ textDecoration: todo.doneAt ? 'line-through' : 'none' }}>
                    {todo.txt}
                </li>
            ))}
        </ul>
    </div>
} 