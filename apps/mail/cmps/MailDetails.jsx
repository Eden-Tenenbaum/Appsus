import { mailsService } from '../services/mail.service.js'
import { utilService } from "../../../services/util.service.js"
const { useNavigate, useParams } = ReactRouterDOM
const { useEffect, useState } = React

import { DetailsActions } from "./DetailsActions.jsx"

export function MailDetails() {

    const [mail, setMail] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadMail()
    }, [params.mailId])

    function loadMail() {
        setIsLoading(true)
        mailsService.get(params.mailId)
            .then(mail => setMail(mail))
            .catch(err => console.log('err:', err))
            .finally(() => setIsLoading(false))
    }

    function onBack() {
        navigate('/mail/primary')
        // navigate(-1)
    }

    if (isLoading) return <div className="loader">Loading...</div>
    if (!mail) return <div className="error">Mail not found</div>

    const { body, subject, from } = mail
    console.log(mail)

    return (
        <div className="mail-details">
            <DetailsActions mail={mail} onBack={onBack}></DetailsActions>
            <p className="subject">{subject}</p>
            <p>
                <span className="from">{from}</span>
                <span className="date">{utilService.formatTimeSent(mail.sentAt)}</span>
            </p>
            <p>
                <span>to me </span>
                <button className="mail-info-btn"><i className="fa-solid fa-chevron-down"></i></button>
            </p>
            <p className="body">{body}</p>
        </div>
    )
}