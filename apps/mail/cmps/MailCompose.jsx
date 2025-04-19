import { utilService } from "../../../services/util.service.js"
import { mailsService } from "../services/mail.service.js"
import { ComposeActions } from "./ComposeActions.jsx"

const { useState, useEffect } = React

export function MailCompose({ setIsOpen }){
 
    const {email, fullname } = mailsService.getUser()

    return (
        <div className="compose-modal">
        <ComposeActions setIsOpen={setIsOpen}/>
            <h1 className="compose-modal-header">New Message</h1>
            <p className="compose-modal-from"><span>From</span> <span>{email}</span> <button><i className="fa-solid fa-chevron-down dropdown-icon"></i></button></p>
            <p className="compose-modal-to"><span>To</span> <input type="text" /> <button><i className="fa-solid fa-chevron-down dropdown-icon"></i></button></p>
            <p className="compose-modal-subject"><input type="text" placeholder="Subject" /></p>
            <input className="compose-modal-body" type="text" placeholder="Compose email" />
        </div>
    )
}