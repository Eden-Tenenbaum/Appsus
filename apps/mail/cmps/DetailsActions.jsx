

export function DetailsActions({ mail, onBack }) {
    return (
        <div className="details-actions-btns">
            <span className="back-btn">
                <button title="Back" onClick={() => onBack()}>
                    <i className="fas fa-arrow-left"></i>
                </button>
            </span>
            <div className="abmd-btns">
                <button title="Archive">
                    <i className="fas fa-box-archive"></i>
                </button>  
                <button title="Bin">
                    <i className="fas fa-trash"></i>
                </button>       
                <button title="Mark as Unread">
                    <i className="fas fa-envelope-open"></i>
                </button>
                <div className="dropdown">
                    <button title="More Options">
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                </div>
            </div>
        </div>
    )
} 