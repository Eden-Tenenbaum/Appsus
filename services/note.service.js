import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'

_createNotes()


export const noteService = {
    query,
    save,
    remove,
    get,
}


function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
}

function get(noteId) {
    return storageService.get('noteDB', noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}


function remove(noteId) {
    return storageService.remove('noteDB', noteId)
}



function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = [
            _createNote('NoteTxt', { txt: 'Welcome to MissKeep!' }),
            _createNote('NoteImg', {
                url: '/assets/img/1.jpg',
                alt: 'cat',
                title: 'React me baby!',
            }),
            _createNote('NoteTodos', {
                title: 'Tasks',
                todos: [
                    { txt: 'Learn React', doneAt: null },
                    { txt: 'Build MissKeep', doneAt: null }
                ]
            })
        ]
        utilService.saveToStorage(NOTE_KEY, notes)
    }
}

function _createNote(type, info) {
    return {
        id: utilService.makeId(),
        type,
        isPinned: false,
        info,
    }
}