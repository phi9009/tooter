import {v4 as uuidv4} from 'uuid';
import Toot from './Toot';
 

export default function Timeline (){
    const test_user = {
        _id: uuidv4(),
        userName: "Phil",
        userHandle: "pho9008"
    }
    const toots = [
        {
            _id: uuidv4(),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            user: {...test_user},
            
        },
        {
            _id: uuidv4(),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            user: {...test_user},
            
        },
        {
            _id: uuidv4(),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            user: {...test_user},
            
        },
        {
            _id: uuidv4(),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            user: {...test_user},
        }
    ]
    console.log(toots)
    return (
        <div className="col-4 border px-0">
            {toots.map((toot) => {
                return(
                <Toot key={toot._id} userName={toot.user.userName} userHandle={toot.user.userHandle} content={toot.content} />
                )
            })}
        </div>
    )
}