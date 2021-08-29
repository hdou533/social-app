import "./sidebar.css";
import { RssFeed, Chat, PlayCircleFilled, Group, Bookmarks, Help, Work, Event, School } from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul class="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilled className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmarks className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <Help className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarBtn">Show more</button>
                <div className="hr"></div>
                <ul className="sidebarFriendList">                    
                    <li className="sidebarFriend">
                        <img src="assets/images/f1.jpg" alt="friend1" className="sidebarFriendIcon" />
                        <span className="sidebarFriendText">May Black</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/images/f2.jpg" alt="friend1" className="sidebarFriendIcon" />
                        <span className="sidebarFriendText">Luiji White</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/images/f3.jpg" alt="friend1" className="sidebarFriendIcon" />
                        <span className="sidebarFriendText">June Pink</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/images/f1.jpg" alt="friend1" className="sidebarFriendIcon" />
                        <span className="sidebarFriendText">May Black</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/images/f2.jpg" alt="friend1" className="sidebarFriendIcon" />
                        <span className="sidebarFriendText">May Black</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/images/f3.jpg" alt="friend1" className="sidebarFriendIcon" />
                        <span className="sidebarFriendText">May Black</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/images/f1.jpg" alt="friend1" className="sidebarFriendIcon" />
                        <span className="sidebarFriendText">May Black</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/images/f2.jpg" alt="friend1" className="sidebarFriendIcon" />
                        <span className="sidebarFriendText">May Black</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/images/f3.jpg" alt="friend1" className="sidebarFriendIcon" />
                        <span className="sidebarFriendText">May Black</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
