
import "./Toot.css"

export default function Toot({content, userName, userHandle}){
    console.log(userHandle)
    return (
        <div className="container border-top border-bottom p-2 d-flex justify-content-start " >
            <div className="container iconBox">
                <div className="container icon"></div>
            </div>

            <div className="container contentBox flex-grow-1">   
                <span className="h6">{userName}</span> 
                <span className="text-secondary">@{userHandle}</span>
                <p>{content}</p>
            </div>

        </div>
)

}