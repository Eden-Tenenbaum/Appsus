import {MailCompose} from "./MailCompose.jsx"
const { useState, useEffect } = React

export function ComposeBtn({ refreshMails }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button className='compose-btn' onClick={() => setIsOpen(true)}>
                <span><i className='fa-solid fa-pencil'></i></span>
                <span>Compose</span>
            </button>

                {isOpen && <MailCompose setIsOpen={setIsOpen} refreshMails={refreshMails} />}
        </div>
    )
}