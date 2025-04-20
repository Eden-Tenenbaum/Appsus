import { utilService } from "../../../services/util.service.js"
import { MailActions } from "./MailActions.jsx"
const { Link, useNavigate } = ReactRouterDOM


export function MailPreview({ mail, onRemove }) {
    const navigate = useNavigate()
    const isRead = mail.isRead ? 'read' : 'unread'

    function toggleStarred(icon) {
        if (mail.isStarred) {
            icon.classList.remove('fa-solid')
            icon.classList.add('fa-regular')
            mail.isStarred = false
        } else {
            icon.classList.add('fa-solid')
            icon.classList.remove('fa-regular')
            mail.isStarred = true
        }
    }

    return (
        
        <tr className={isRead} onClick={() => navigate(`/mail/details/${mail.id}`, { state: { mail } })}>
            <td className='mail-from'>{utilService.limitText(mail.from, 40)}</td>
            <td className='mail-subject'>{utilService.limitText(mail.subject)} - </td>
            <td className='mail-body'>{utilService.limitText(mail.body)}</td>
            <td className='mail-date'>{utilService.formatTimeSent(mail.sentAt)}</td>
            <td className="mail-starred" onClick={(ev) => {
                ev.stopPropagation()
                const star = ev.currentTarget.querySelector('i')
                toggleStarred(star)
            }}><i className="fa-regular fa-star"></i></td>
            <MailActions mail={mail} onRemove={onRemove}/>
        </tr>
    )
}