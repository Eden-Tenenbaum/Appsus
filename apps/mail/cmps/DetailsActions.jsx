

export function DetailsActions({ mail, onBack }) {
    return (
        <div className="details-actions-btns">
            <span>
                <button title="Back" onClick={() => onBack()}>
                    <i className="fas fa-arrow-left"></i>
                </button>
            </span>
            <span>
                <button title="Archive">
                    <i className="fas fa-box-archive"></i>
                </button>
            </span>
            <span>
                <button title="Bin">
                    <i className="fas fa-trash"></i>
                </button>
            </span>
            <span>
                <button title="Mark as Unread">
                    <i className="fas fa-envelope-open"></i>
                </button>
            </span>
            <span>
                <div className="dropdown">
                    <button title="More Options">
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                </div>
            </span>
        </div>
    )
}