import "./rightbar.css";

export default function Rightbar() {
    return (
        <div class="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="../../assets/images/bd.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>May Black</b> and 1 other friend have a birthday today.</span>
                </div>
                <img className="rightbarAd" src="../../assets/images/advertisement.jpg" alt="" />
                <div className="suggestions">
                    <h6>Suggestions For You</h6>
                    <ul className="rightbarFriendList"> 
                        <li className="rightbarFriend">
                            <img src="assets/images/f1.jpg" alt="friend1" className="rightbarFriendIcon" />
                            <span className="rightbarFriendText">Allen Winston</span>
                            <button className="rightbarFriendBtn">Follow</button>
                        </li>
                        <li className="rightbarFriend">
                            <img src="assets/images/f1.jpg" alt="friend1" className="rightbarFriendIcon" />
                            <span className="rightbarFriendText">Allen Winston</span>
                            <button className="rightbarFriendBtn">Follow</button>
                        </li>
                        <li className="rightbarFriend">
                            <img src="assets/images/f1.jpg" alt="friend1" className="rightbarFriendIcon" />
                            <span className="rightbarFriendText">Allen Winston</span>
                            <button className="rightbarFriendBtn">Follow</button>
                        </li>
                        <li className="rightbarFriend">
                            <img src="assets/images/f1.jpg" alt="friend1" className="rightbarFriendIcon" />
                            <span className="rightbarFriendText">Allen Winston</span>
                            <button className="rightbarFriendBtn">Follow</button>
                        </li>
                    </ul>
                </div>
                <div className="footer">
                    <div className="footerContainer">
                        <div className="footerLinks">
                            <span>About</span>
                            <span>Help</span>
                            <span>Privacy</span>
                            <span>Terms</span>
                            <span>Contact</span>
                        </div>
                        <div className="copyright">
                            <span>© 2021 Connect. </span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
