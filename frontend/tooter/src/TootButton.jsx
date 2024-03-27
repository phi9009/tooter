import "./TootButton.css"


export default function TootButton ({label, value, click}){
    return (
        <span className="TootButton m-2 p-2" onClick={click}>
            {label} {value}
        </span>
    )
}