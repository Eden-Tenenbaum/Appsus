import { mailsService } from '../services/mail.service.js'


export function MailActions({ mail, onRemove }) {
    return (
        <td className="mail-actions-btns">
            <i
                className="fa-solid fa-box-archive"
                onClick={(ev) => {
                    ev.stopPropagation()
                    console.log('archiving...')}
                    }>
            </i> {/* Archive */}
            <i
                className="fa-regular fa-trash-can"
                onClick={(ev) => {
                    ev.stopPropagation()
                    onRemove(mail.id)
                }}>
            </i> {/* Delete */}
            <i
                className="fa-regular fa-envelope"
                onClick={(ev) => {
                    ev.stopPropagation()
                    console.log('marked as read...')
                }}>
            </i> {/* Mark as Unread */}
            <i
                className="fa-regular fa-clock"
                onClick={(ev) => {
                    ev.stopPropagation()
                    console.log('snoozing...')
                }}>
            </i> {/* Snooze */}
        </td>
    )
}