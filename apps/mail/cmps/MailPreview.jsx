import { utilService } from "../../../services/util.service.js"
import { MailActions } from "./MailActions.jsx"
const { Link, useNavigate } = ReactRouterDOM


export function MailPreview({ mail, onRemove, updateMail, refreshMails }) {
    const navigate = useNavigate()
    const isRead = mail.read ? 'read' : 'unread'

    function toggleStarred(icon) {
        if (mail.starred) {
            icon.classList.remove('fa-solid')
            icon.classList.add('fa-regular')
            mail.starred = false
        } else {
            icon.classList.add('fa-solid')
            icon.classList.remove('fa-regular')
            mail.starred = true
        }
    }

    function toggleRead(bool) {
        mail.read = bool
        updateMail(mail)
    }

    return (
        <tr className={isRead} onClick={() => {
            toggleRead(true)
            navigate(`/mail/details/${mail.id}`,
                { state: { mail } })
        }}>
            <td className='mail-from'>{utilService.limitText(mail.from, 40)}</td>
            <td className='mail-subject'>{utilService.limitText(mail.subject)} - </td>
            <td className='mail-body'>{utilService.limitText(mail.body)}</td>
            <td className='mail-date'>{utilService.formatTimeSent(mail.sentAt)}</td>
            <td className="mail-starred" onClick={(ev) => {
                ev.stopPropagation()
                const star = ev.currentTarget.querySelector('i')
                toggleStarred(star)
            }}><i className="fa-regular fa-star"></i></td>
            <MailActions 
            mail={mail} 
            onRemove={onRemove} 
            updateMail={updateMail}
            refreshMails={refreshMails}
            toggleRead={toggleRead}
             />
        </tr>
    )
}