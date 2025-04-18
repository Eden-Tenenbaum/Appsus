import { utilService } from "../../../services/util.service.js"
const { Link, useNavigate } = ReactRouterDOM


export function MailPreview({ mail }) {
    const navigate = useNavigate()
    const isRead = mail.isRead ? 'read' : 'unread'

    // console.log('you are here')

    return (
        <tr className={isRead} onClick={() => navigate(`/mail/details/${mail.id}`, { state: { mail } })}>
            <td className='mail-from'>{utilService.limitText(mail.from, 40)}</td>
            <td className='mail-subject'>{utilService.limitText(mail.subject)}</td>
            <td className='mail-body'>{utilService.limitText(mail.body)}</td>
            <td className='mail-date'>{utilService.formatTimeSent(mail.sentAt)}</td>
            {/* <td> <button></button> </td>
            <td> <button></button> </td> */}
        </tr>
    )
}