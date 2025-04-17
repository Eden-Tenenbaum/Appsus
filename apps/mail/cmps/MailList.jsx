
import { MailPreview } from "./MailPreview.jsx"
const { Link } = ReactRouterDOM


export function MailList({ mails, onRemove }) {
    console.log('mails: ', mails)
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