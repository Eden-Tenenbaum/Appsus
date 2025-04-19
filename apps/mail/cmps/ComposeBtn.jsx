import {MailCompose} from "./MailCompose.jsx"
const { useState, useEffect } = React

export function ComposeBtn() {

    const [isOpen, setIsOpen] = useState(false)

    function toggleIsOpen(bool){
        return (bool) ? setIsOpen(false) : setIsOpen(true)
    }

    return (
        <div>
            <button className='compose-btn' onClick={() => toggleIsOpen(isOpen)}>
                <span><i className='fa-solid fa-pencil'></i></span>
                <span>Compose</span>
            </button>

            {isOpen && <MailCompose setIsOpen={setIsOpen}/>}
        </div>
    )
}