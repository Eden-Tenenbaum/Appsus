import { mailsService } from '../services/mail.service.js'


export function MailActions({ mail, onRemove, updateMail, refreshMails, toggleRead }) {
    return (
        <td className="mail-actions-btns">
            <i
                className="fa-solid fa-box-archive"
                onClick={(ev) => {
                    ev.stopPropagation()
                    console.log('archiving...')
                }
                }>
            </i>
            <i
                className="fa-regular fa-trash-can"
                onClick={(ev) => {
                    ev.stopPropagation()
                    if (mail.bin === true) {
                        onRemove(mail.id)
                        setTimeout(() => refreshMails(), 500)
                    } else {
                        const updatedMail = { ...mail, bin: true }
                        updateMail(updatedMail)
                        setTimeout(() => refreshMails(), 500)
                    }
                }}>
            </i>
            <i
                className="fa-regular fa-envelope"
                onClick={(ev) => {
                    ev.stopPropagation()
                    if (mail.read === true) {
                        toggleRead(false)
                        setTimeout(() => refreshMails(), 500)
                    } else {
                        toggleRead(true)
                        setTimeout(() => refreshMails(), 500)
                    }
                }}>
            </i>
            <i
                className="fa-regular fa-clock"
                onClick={(ev) => {
                    ev.stopPropagation()
                    console.log('snoozing...')
                }}>
            </i>
        </td>
    )
}