import { mailsService } from "../services/mail.service.js"
import { ComposeActions } from "./ComposeActions.jsx"

const { useState, useEffect } = React

export function MailCompose({ setIsOpen, refreshMails }) { 
    const { email, fullname } = mailsService.getUser()

    const [to, setTo] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    function sendContents() {
        const sentMailContents = {
            createdAt: Date.now(),
            subject,
            body,
            sentAt: Date.now(),
            removedAt: null,
            from: email,
            to,
        }
        return sentMailContents
    }

    return (
        <div className="compose-modal">
            <ComposeActions setIsOpen={setIsOpen} sendContents={sendContents} refreshMails={refreshMails} />
            <h1 className="compose-modal-header">New Message</h1>
            <p className="compose-modal-from"><span>From</span> <span>{email}</span> <button><i className="fa-solid fa-chevron-down dropdown-icon"></i></button></p>
            <p className="compose-modal-to">
                <span>To</span>
                <input type="text" value={to} onChange={ev => setTo(ev.target.value)} />
                <button><i className="fa-solid fa-chevron-down dropdown-icon"></i></button>
            </p>
            <p className="compose-modal-subject">
                <input type="text" placeholder="Subject" value={subject} onChange={ev => setSubject(ev.target.value)} />
            </p>
            <textarea className="compose-modal-body" placeholder="Compose email" value={body} onChange={ev => setBody(ev.target.value)} />
        </div>
    )
}