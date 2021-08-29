import Share from "../../components/share/Share";
import Post from "../../components/post/Post";
import "./feed.css";

export default function Feed() {
    return (
        <div class="feed">
            <Share />
            <Post />
        </div>
    )
}
