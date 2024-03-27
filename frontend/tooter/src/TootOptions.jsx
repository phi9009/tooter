import TootButton from "./TootButton"
import "./TootOptions.css"
export default function TootOptions({retoots, replies, likes}){

    return (
        <div className="container d-flex TootOptions">
            <TootButton label="reply" value={replies}/>
            <TootButton label="Retoot" value={retoots}/>
            <TootButton label="like" value={likes}/>
            
            
        </div>

    )

}
