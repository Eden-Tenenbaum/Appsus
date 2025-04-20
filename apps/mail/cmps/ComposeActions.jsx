import { mailsService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function ComposeActions({ setIsOpen, sendContents, refreshMails }) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    function sendMail() {
        const contents = sendContents()
        mailsService.save(contents)
        .then(() => {
        setIsOpen(false)
        refreshMails()
        setIsModalOpen(true)
        })
        .catch(err => console.log('there was an error while sending the mail'))
    }

    return (
        <div className="compose-actions">
            <div>
                <button title="Back" onClick={() => setIsOpen(false)}><i className="fa-solid fa-arrow-left"></i></button>
            </div>
            <div>
                <button title="Attach"><i className="fa-solid fa-paperclip"></i></button>
                <button title="Send" onClick={() => sendMail()}><i className="fa-solid fa-location-arrow"></i></button>
                <button title="More actions"><i className="fa-solid fa-ellipsis-vertical"></i></button>
            </div>


        </div>
    )
}