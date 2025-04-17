const { useState, useEffect } = React

import { MailCompose } from "./MailCompose.jsx"



export function MailFolderList({ mails }) {

    return (
        <div>
            <MailCompose mails={mails} />
            <h1>Hi</h1>
        </div>
    )
}