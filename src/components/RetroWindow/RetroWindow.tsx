import "./retro-window.scss";

export default function RetroWindow({ title, children, className }: any) {
    const wrapperClass = "window "+(className || "");
    return (
        <div className={wrapperClass}>
            <div className="title-bar">
                <div className="title-bar-text">
                    {title}
                </div>
            </div>
            <div className="window-body">
                {children}
            </div>
        </div>
    );
};