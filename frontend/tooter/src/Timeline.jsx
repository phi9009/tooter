import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Toot from "./Toot";

function makeToots( ){
	const test_user = {
		_id: uuidv4(),
		userName: "Phil",
		userHandle: "pho9008",
	};

	const makeArray = [];
	for( let i = 0; i < 5; i++){
		makeArray.push({
			_id: uuidv4(),
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			user: { ...test_user },
			likes: 4,
			replies: [],
			retoots: 3,
		})
	}
	return makeArray;
}

export default function Timeline() {
	
	const [toots, updateToots] = useState(makeToots);
	
	const likeClick = (id) => {
		updateToots((prevItems) => {
			return prevItems.map((item)=>{
				if(item._id == id){
					let likes = item.likes;
					likes++;
					return {...item, likes: likes}
				}else{
					return item;
				}
			})
		})
	}
	
	return (
		<div className="col-4 border px-0">
			{toots.map((toot) => {
				return (
					<Toot
						key={toot._id}
						userName={toot.user.userName}
						userHandle={toot.user.userHandle}
						content={toot.content}
                        likes={toot.likes}
                        retoots={toot.retoots}
                        replies={toot.replies.length}
						likeClick={()=> likeClick(toot._id)}
					/>
				);
			})}
		</div>
	);
}
