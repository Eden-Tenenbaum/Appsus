const { useState, useEffect } = React

export function AppSearchBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')


    return (
        <div className="app-search-bar">

            <i className="fa-solid fa-magnifying-glass"></i>
            <input
                type="text" placeholder="Search"
                value={searchValue} onChange={ev => setSearchValue(ev.target.value)}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
            />
        </div>
    )
}