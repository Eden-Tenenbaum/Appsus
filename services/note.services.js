export const NoteService = {
    query,
}


function query() {
    return Promise.resolve([
        {
            id: 'n101',
            type: 'NoteTxt',
            isPinned: true,
            info: { txt: 'fullstack Me Baby!' },
        },
        {
            id: 'n102',
            type: 'NoteImg',
            isPinned: false,
            info: { url: '/assets/img/1.jpg', alt: 'image-placeholder', title: 'Cute Kitten' },
        },

        {
            id: 'n103',
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Get my stuff together',
                todos: [
                    { txt: 'Driving license', doneAt: null },
                    { txt: 'Coding power', doneAt: 187111111 },
                ],
            },
        },
    ])
}

