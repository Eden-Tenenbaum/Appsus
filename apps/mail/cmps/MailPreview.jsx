export function MailPreview({ mail }) {
    // return <div>Mail preview</div>

    function formatTimeSent(timestamp) { //move to util.service
        const now = new Date()
        const sentDate = new Date(timestamp)

        const isSameDay =
            now.getFullYear() === sentDate.getFullYear() &&
            now.getMonth() === sentDate.getMonth() &&
            now.getDate() === sentDate.getDate()

        if (isSameDay) {
            return sentDate.toLocaleTimeString(undefined, {
                hour: 'numeric',
                minute: '2-digit',
            })
        } else {
            return sentDate.toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                ...(now.getFullYear() === sentDate.getFullYear() ? {} : { year: 'numeric' })
            })
        }
    }

    function limitText(text, maxLength = 60) { //move to util.service
        if (!text) return ''
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text

    }

    return (
        <tr>
            <td className='mail-from'>{limitText(mail.from, 40)}</td>
            <td className='mail-subject'>{limitText(mail.subject)}</td>
            <td className='mail-body'>{limitText(mail.body)}</td>
            <td className='mail-date'>{formatTimeSent(mail.sentAt)}</td>
            {/* <td> <button></button> </td>
            <td> <button></button> </td> */}
        </tr>
    )
}