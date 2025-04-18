const { useState, useEffect } = React
const { Link, Route, Routes, Navigate } = ReactRouterDOM

import { mailsService } from "../services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"
import { MailPreview } from "../cmps/MailPreview.jsx"
import { MailDetails } from "../cmps/MailDetails.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailFolderList } from "../cmps/MailFolderList.jsx"



export function MailIndex() {

    const [mails, setMails] = useState([])

    useEffect(() => {
        mailsService.query().then(setMails)
    }, [])

    function removeMail(mailId) {
        mailsService.remove(mailId)
            .then(() => {
                setMails(prevMails => prevMails.filter(mail => mailId !== mail.id))
                showSuccessMsg('Mail has been successfully removed!')
            })
            .catch(() => {
                showErrorMsg(`couldn't remove Mail`)
            })
    }

    // console.log('you are here')

    return (
        <div className='mails-container'>
            <MailFolderList mails={mails} />
            <Routes>
                <Route path="/" element={<Navigate to="inbox" />} />
                <Route
                    path=":folder"
                    element={<MailList mails={mails} onRemove={removeMail} />}
                />
            </Routes>
        </div>
    )
}

