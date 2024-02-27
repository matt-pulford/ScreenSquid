import { Link } from "react-router-dom";
import './css/room-creator.css'
import screenSquidShadow from './images/screen-squid-shadow.png'

export default function RoomCreator() {
    return (
        <div className="room-creator-div">
            <div className="logo-image">
            <img src={screenSquidShadow} alt="Screen Squid Shadow" />

            </div>
            <div className="button-container">
               <Link to="/create" className="button">Create a Room</Link>
            </div>
            <div className="button-container">
                <Link to="/create" className="button">Join a Room</Link>
            </div>
        </div>
    )
}
