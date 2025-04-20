const { useState, useEffect } = React
const { Link, Route, Routes, Navigate } = ReactRouterDOM

import { showUserMsg, showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"
import { mailsService } from "../services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"
import { MailPreview } from "../cmps/MailPreview.jsx"
import { MailDetails } from "../cmps/MailDetails.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailFolderList } from "../cmps/MailFolderList.jsx"


export function MailIndex() {

    const [mails, setMails] = useState([])
    const [filteredMails, setFilteredMails] = useState([])
    const [filterByFolder, setFilterByFolder] = useState('all')

    const { email, fullname } = mailsService.getUser()

    useEffect(() => {
        mailsService.query().then(setMails)
    }, [])

    useEffect(() => {
        filterMails()
    }, [mails, filterByFolder])

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

    function updateMail(mail) {
        mailsService.save(mail)
    }

    function refreshMails() {
        mailsService.query()
            .then(setMails)
    }

    function filterMails() {
        if (filterByFolder === 'all' || filterByFolder === 'primary') {
            const noBin = mails.filter(mail => !mail.bin && mail.from !== email)
            setFilteredMails(noBin)
        } else {
            const filtered = mails.filter(mail => mail[filterByFolder] === true)
            setFilteredMails(filtered)
        }
    }
    // console.log('you are here')

    return (
        <div className='mails-container'>
            <MailFolderList mails={mails} refreshMails={refreshMails} setFilterByFolder={setFilterByFolder} />
            <Routes>
                <Route path="/" element={<Navigate to="inbox" />} />
                <Route
                    path=":folder" p
                    element={<MailList
                        mails={filteredMails}
                        onRemove={removeMail}
                        updateMail={updateMail}
                        filterMails={filterMails}
                        refreshMails={refreshMails}
                    />}
                />
            </Routes>
        </div>
    )
}

