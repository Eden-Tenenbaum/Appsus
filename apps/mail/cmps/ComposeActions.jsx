

export function ComposeActions({ setIsOpen }) {
    return (
        <div className="compose-actions">
            <div>
                <button title="Back" onClick={() => setIsOpen(false)}><i className="fa-solid fa-arrow-left"></i></button>
            </div>
            <div>
                <button title="Attach"><i className="fa-solid fa-paperclip"></i></button>
                <button title="Send"><i className="fa-solid fa-location-arrow"></i></button>
                <button title="More actions"><i className="fa-solid fa-ellipsis-vertical"></i></button>
            </div>
        </div>
    )
}