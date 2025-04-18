const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { MailCompose } from "./MailCompose.jsx"

const folders = [
    { label: 'All Inboxes', path: 'all', icon: 'fa-inbox' },
    { label: 'Primary', path: 'primary', icon: 'fa-envelope' },
    { label: 'Promotions', path: 'promotions', icon: 'fa-tags' },
    { label: 'Social', path: 'social', icon: 'fa-users' },
    { label: 'Updates', path: 'updates', icon: 'fa-bell' },
    { label: 'All labels', path: ''},
    { label: 'Starred', path: 'starred', icon: 'fa-star' },
    { label: 'Snoozed', path: 'snoozed', icon: 'fa-clock' },
    { label: 'Important', path: 'important', icon: 'fa-exclamation' },
    { label: 'Sent', path: 'sent', icon: 'fa-paper-plane' },
    { label: 'Drafts', path: 'drafts', icon: 'fa-file-alt' },
    { label: 'Spam', path: 'spam', icon: 'fa-ban' },
    { label: 'Bin', path: 'bin', icon: 'fa-trash' }
]
// console.log(folders)
export function MailFolderList({ mails }) {
    return (
        <div>
            <MailCompose mails={mails} />
            <section className="mail-menu">
                {folders.map(folder => (
                    <div key={folder.path} className="menu-item">
                        <Link to={`/mail/${folder.path}`}>
                            <i className={`fas ${folder.icon}`}></i>  {/* change fas to far later for hollow icons - looks better */}
                            <span>{folder.label}</span>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    )
}