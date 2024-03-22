

export default function Toot({content, userName, userHandle}){
    console.log(userHandle)
    return (
        <div className="container border-top border-bottom p-2" >
            
            <span className="h6">{userName}</span> 
            <span className="text-secondary">@{userHandle}</span>
            <p>{content}</p>

        </div>
)

}