export function ColorInput({ onSetColor, backgroundColor }) {
    const colors = [
        '#F44236',
        '#9C27B0',
        '#3F51B5',
        '#2196F3',
        '#4caf50',
        '#101010',
        '#ffffff',
    ]
    return <section className="color-input">
        <div className="items-container">
            {colors.map(color => (
                <div
                    key={color}
                    className={`item ${color === backgroundColor ? 'chosen' : ''} `}
                    style={{
                        backgroundColor: color,
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        margin: '4px',
                        border: color === backgroundColor ? '2px solid white' : '1px solid #ccc'
                    }}
                    onClick={() => onSetColor(color)}
                ></div>
            ))}
        </div>
    </section>
} 