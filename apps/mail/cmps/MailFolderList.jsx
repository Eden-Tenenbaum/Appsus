const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { ComposeBtn } from "./ComposeBtn.jsx"
import { mailsService } from "../services/mail.service.js"

const folders = [
    { label: 'All Inboxes', path: 'all', icon: 'fa-inbox' },
    { label: 'Primary', path: 'primary', icon: 'fa-envelope' },
    { label: 'Promotions', path: 'promotions', icon: 'fa-tags' },
    { label: 'Social', path: 'social', icon: 'fa-users' },
    { label: 'Updates', path: 'updates', icon: 'fa-bell' },
    { label: 'All labels', path: '' },
    { label: 'Starred', path: 'starred', icon: 'fa-star' },
    { label: 'Snoozed', path: 'snoozed', icon: 'fa-clock' },
    { label: 'Important', path: 'important', icon: 'fa-exclamation' },
    { label: 'Sent', path: 'sent', icon: 'fa-paper-plane' },
    { label: 'Drafts', path: 'drafts', icon: 'fa-file-alt' },
    { label: 'Spam', path: 'spam', icon: 'fa-ban' },
    { label: 'Bin', path: 'bin', icon: 'fa-trash' }
]

// console.log(folders)

export function MailFolderList({ mails, refreshMails }) {
    const { email, fullname } = mailsService.getUser()
    const unread = mails.filter(mail => !mail.isRead && mail.to === email)

    return (
        <div className="mail-menu">
            <ComposeBtn mails={mails} refreshMails={refreshMails} />
            <section className="mail-fodler-list">
                {folders.map(folder => (
                    <div key={folder.path} className="menu-item">
                        <Link to={`/mail/${folder.path}`}>
                            <i className={`fas ${folder.icon}`}></i>  {/* change fas to far later for hollow icons - looks better */}
                            <span>{folder.label}</span>
                            <span>{(folder.path === 'primary') ? `${unread.length}` : ''}</span>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    )
}