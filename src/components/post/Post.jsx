import { MoreVert, ThumbUp, Favorite } from "@material-ui/icons";
import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <img className="authorImg" src="/assets/images/avatar.png" alt="Author" />
                    <span className="authorName">Joe Portman<br/>
                        <span className="postDate">5 mins ago</span>
                    </span>
                    
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                
                <div className="postMain">
                    <p className="postText">Hi, this is my first post here.</p>
                    <img className="postImg" src="assets/images/happy.jpg" alt="post" />
                </div>
                <div className="likes">
                    <span className="likesArea">❤️</span>
                    <span className="likesArea">32 people liked it</span>
                </div>
            </div>
        </div>
    )
}
