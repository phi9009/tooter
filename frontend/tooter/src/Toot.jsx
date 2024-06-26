import TootOptions from "./TootOptions";
import "./Toot.css";

export default function Toot({
	content,
	userName,
	userHandle,
	retoots,
	replies,
	likes,
	likeClick,
	tootClick,
	repClick,
}) {
	console.log(userHandle);
	return (
		<div className="container toot-box border-top border-bottom p-2 d-flex justify-content-start ">
			<div className="container iconBox">
				<div className="container icon"></div>
			</div>

			<div className="container contentBox flex-grow-1">
				<span className="h6">{userName}</span>
				<span className="text-secondary">@{userHandle}</span>
				<p>{content}</p>
				<TootOptions 
                    retoots={retoots} 
                    replies={replies} 
                    likes={likes} 
                    likeClick={likeClick}
                    tootClick={tootClick}
                    repClick={repClick}/>
			</div>
		</div>
	);
}
