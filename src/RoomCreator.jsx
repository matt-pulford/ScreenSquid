import { Link } from "react-router-dom";
import './css/room-creator.css'
import screenSquidLogo from './images/screen-squid-logo.png'

export default function RoomCreator() {
    return (
        <div className="room-creator-div">
            <div className="logo-image">
                <img src={screenSquidLogo} alt="Screen Squid Shadow" />
            </div>
            <Link to="/create" className="button-container">
                <div className="button-text">Create a Room</div>
            </Link>
            <Link to="/create" className="button-container">
                <div className="button-text">Join a Room</div>
            </Link>
        </div>
    );
}
