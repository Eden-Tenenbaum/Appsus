import { mailsService } from '../services/mail.service.js'
import { utilService } from "../../../services/util.service.js"
import { MailPreview } from "./MailPreview.jsx"
import { FilterBtn } from "./FilterBtn.jsx"
const { Link, useParams } = ReactRouterDOM
const { useEffect, useState } = React


export function MailList({ mails, onRemove, updateMail, filterMails, refreshMails }) {
    const { email, fullname } = mailsService.getUser()

    console.log('mails: ', mails)
    mails.sort((a, b) => new Date(b.sentAt) - new Date(a.sentAt))

    const [mail, setMail] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        loadMail()
    }, [])

    function loadMail() {
        setIsLoading(true)
        mailsService.get(params.mailIsRead)
            .then(mail => setMail(mail))
            .catch(err => console.log('err:', err))
            .finally(() => setIsLoading(false))
    }

    if (isLoading) return <div className="loader">Loading...</div>

    return (
        <section className='mails-table'>
            {mails.length === 0 ? (
                <div className="empty-inbox-msg">Your inbox is empty</div>
            ) : (
                <table>
                    <tbody>
                        {/* <FilterBtn /> */}
                        {mails.map(mail =>  
                            <MailPreview key={mail.id}
                                mail={mail}
                                onRemove={onRemove}
                                updateMail={updateMail}
                                refreshMails={refreshMails}
                            />
                        )}
                    </tbody>
                </table>
            )}
        </section>
    )
}
