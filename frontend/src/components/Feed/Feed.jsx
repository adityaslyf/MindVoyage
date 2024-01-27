import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import {Posts} from '../../DummyData'
const Feed = () => {
  return (
    <div className="feed bg-sky-100 ">
      <div className=" feedwrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      
     
      </div>
    </div>
  );
};

export default Feed;