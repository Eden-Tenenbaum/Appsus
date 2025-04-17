const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./pages/About.jsx"
import { Home } from "./pages/Home.jsx"
import { MailIndex } from "./apps/mail/pages/MailIndex.jsx"
import { MailList } from "./apps/mail/cmps/MailList.jsx"
import { MailPreview } from "./apps/mail/cmps/MailPreveiw.jsx"
import { MailDetails } from "./apps/mail/cmps/MailDetails.jsx"
import { MailFilter } from "./apps/mail/cmps/MailFilter.jsx"
import { MailFolderList } from "./apps/mail/cmps/MailFolderList.jsx"
import { MailCompose } from "./apps/mail/cmps/MailCompose.jsx"
import { NoteIndex } from "./apps/note/pages/NoteIndex.jsx"
import { NotePreview } from "./apps/note/cmps/NotePreview.jsx"




export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/note" element={<NoteIndex />} />
            </Routes>
        </section>
    </Router>
}
