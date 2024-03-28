import TootButton from "./TootButton";
import "./TootOptions.css";
export default function TootOptions({
	retoots,
	replies,
	likes,
	likeClick,
	tootClick,
	repClick,
}) {
	return (
		<div className="container d-flex TootOptions">
			<TootButton label="reply" value={replies} click={repClick}/>
			<TootButton label="Retoot" value={retoots} click={tootClick}/>
			<TootButton label="like" value={likes} click={likeClick} />
		</div>
	);
}
