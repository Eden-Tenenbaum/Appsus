import { mailsService } from "../services/mail.service.js"
import { utilService } from "../../../services/util.service.js"

const { Link, useNavigate } = ReactRouterDOM

export function MailSearchPreview({ mail }) {

    const navigate = useNavigate()
    const { email, fullname } = mailsService.getUser()

    const fromMe = (mail.from === email)

    return (
        <tr onClick={() => navigate(`/mail/details/${mail.id}`, { state: { mail } })}>
            <td>
                <div className="search-option">
                    <i className="fa-solid fa-envelope"></i>
                    <div className="search-option-preview">
                        <p>{mail.subject}</p>
                        {fromMe ?
                            <p>me, {mail.to}</p>
                            :
                            <p>{mail.from}, me</p>}
                    </div>
                    <div className="search-option-date">{utilService.formatTimeSent(mail.sentAt)}</div>
                </div>
            </td>
        </tr>
    )
}