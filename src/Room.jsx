
import './css/room.css'; // Adjust the path as necessary for your project structure

export default function Room() {
    return (
        <div id="room-container">
            <div id="video-container">
                <video id="video-player" controls>
                    {/* Video source goes here */}
                    <source src="path_to_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div id="video-controls">
                    {/* Player controls go here */}
                    <div id="user-avatars">
                        {/* User avatars go here */}
                    </div>
                    <button id="mute-all">Mute All</button>
                </div>
            </div>
            <div id="chat-container">
                <div id="chat-area">
                    {/* Chat messages go here */}
                </div>
                <input type="text" id="chat-input" placeholder="Type your message..." />
            </div>
        </div>
    );
}
