import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div>
            <div className="topbar-container">
                <div className="topbarLeft">
                    <span id="logo">Connect.</span>
                </div>
                <div className="topbarCenter">
                    <div className="searchBar">
                        <Search className="searchIcon"/>
                        <input type="text" placeholder="Search for friends, posts or videos" className="searchInput" />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbar-links">
                        <span className="topbar-link">Home</span>
                        <span className="topbar-link">Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <Person />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <Chat />
                            <span className="topbarIconBadge">4</span>
                        </div>
                        <div className="topbarIconItem">
                            <Notifications />
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div>
                    <img src="/assets/images/avatar.png" alt="photo" class="topbarImage"/>
                </div>
            </div>
        </div>
    )
}


