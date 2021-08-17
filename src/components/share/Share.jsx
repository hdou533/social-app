import "./share.css";
import { PhotoLibrary, Label, LocationOn, InsertEmoticon } from "@material-ui/icons";

export default function Share() {
    return (
        <div className="shareContainer">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="sharePhoto" src="/assets/images/avatar.png" alt="Avatar" />
                    <input className="shareTopInput" type="text" placeholder="What's in your mind?"/>
                </div>
                <div className="shareHr"></div>
                <div className="shareOptions">
                    <ul className="shareImageList">
                        <li>
                            <PhotoLibrary htmlColor="tomato" className="shareIcon" />
                            <span className="IconText">Photos</span>
                        </li>
                        <li>
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="IconText">Label</span>
                        </li>
                        <li>
                            <LocationOn htmlColor="green" className="shareIcon" />
                            <span className="IconText">Location</span>
                        </li>
                        <li>
                            <InsertEmoticon htmlColor="olive" className="shareIcon" />
                            <span className="IconText">Emoji</span>
                        </li>
                        <li>
                            <button className="shareBtn">Share</button>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}
