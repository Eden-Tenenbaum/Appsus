import { utilService } from '../services/util.service.js'
import { MailSearchPreview } from "../apps/mail/cmps/MailSearchPreview.jsx"

const { useState, useEffect } = React


export function AppSearchBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [filteredMails, setFilteredMails] = useState([])

    const mails = utilService.loadFromStorage("mailDB")

        function filterMails(searchStr) {
            const lowerSearch = searchStr.toLowerCase()
          
            const filtered = mails.filter(mail =>
              mail.from.toLowerCase().includes(lowerSearch) ||
              mail.to.toLowerCase().includes(lowerSearch) ||
              mail.subject.toLowerCase().includes(lowerSearch) ||
              mail.body.toLowerCase().includes(lowerSearch)
            )

            setFilteredMails(filtered)
          }

    return (
        <div className="app-search-bar-container">
            {isOpen && (<div className="placeholder"></div>)}
            <div className={`app-search-bar ${isOpen ? 'open' : ''}`}>
                <div>
                    <div className="input-bar">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text" placeholder="Search"
                            value={searchValue} onChange={ev => {
                                setSearchValue(ev.target.value)
                                filterMails(ev.target.value)
                            }}
                            onFocus={() => setIsOpen(true)}
                            onBlur={() => setIsOpen(false)}
                        />
                    </div>
                    {isOpen && (
                        <section className="search-dropdown">
                            <table>
                                <tbody>
                                    {filteredMails.map(mail =>
                                        <MailSearchPreview
                                            key={mail.id}
                                            mail={mail}
                                        />
                                    )}
                                </tbody>
                            </table>
                        </section>
                    )}
                </div>
            </div>
        </div>
    )
}