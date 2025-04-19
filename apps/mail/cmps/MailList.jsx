import { mailsService } from '../services/mail.service.js'
import { utilService } from "../../../services/util.service.js"
import { MailPreview } from "./MailPreview.jsx"
const { Link, useParams } = ReactRouterDOM
const { useEffect, useState } = React


export function MailList({ mails, onRemove }) {
    console.log('mails: ', mails)

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
        
    return (<section className='mails-table'>
        <table>
            <tbody>
                {mails.map(mail =>
                    <MailPreview key={mail.id} mail={mail}/>
                )}
            </tbody>
        </table>
    </section>
    )
}

{/* <td>
                            <button onClick={() => onRemove(mail.id)} className='close'>
                                <i className="fa-regular fa-trash-can"></i>
                            </button>
                            <nav className='mail-nav'>
                                <Link to={`/mail/${mail.id}`}>
                                    <button><i className="fa-solid fa-circle-info"></i> Details</button>
                                </Link>
                                <Link to={`/mail/edit/${mail.id}`}>
                                    <button><i className="fa-solid fa-pen-to-square"></i></button>
                                </Link>
                            </nav>
                        </td> */}