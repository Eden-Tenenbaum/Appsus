// export function MailList() {
//     return <div>Mail list</div>
// }

import { MailPreview } from "./MailPreview.jsx"
const { Link } = ReactRouterDOM


export function MailList({ mails, onRemove }) {
    console.log('mails: ', mails)
    return (<section className='mails-table'>
        <table>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Sent At</th>
                </tr>
            </thead>
            <tbody>
                {mails.map(mail =>
                    // <tr key={mail.id}>
                    //     <MailPreview mail={mail} />
                    // </tr>
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