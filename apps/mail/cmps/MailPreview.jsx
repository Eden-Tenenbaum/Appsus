export function MailPreview({ mail }) {
    // return <div>Mail preview</div>

    function formatTimeSent(timestamp) {
        const now = Date.now()
        const diff = now - timestamp

        const minute = 1000 * 60
        const hour = minute * 60
        const day = hour * 24
        const year = day * 365.25

        if (diff < minute) return 'Just now'
        if (diff < hour) return `${Math.floor(diff / minute)} minute(s) ago`
        if (diff < day) return `${Math.floor(diff / hour)} hour(s) ago`
        if (diff < year) {
            const date = new Date(timestamp)
            return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) // e.g. Apr 17
        }

        const yearsAgo = Math.floor(diff / year)
        return `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`
    }

    return (
        <tr>
            <td className='mail-from'>{mail.from}</td>
            <td className='mail-subject'>{mail.subject}</td>
            <td className='mail-body'>{mail.body}</td>
            <td className='mail-date'>{formatTimeSent(mail.sentAt)}</td>
            {/* <td> <button></button> </td>
            <td> <button></button> </td> */}
        </tr>
    )
}