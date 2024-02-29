import './css/home.css'
import { Link } from 'react-router-dom'

import screenSquidLogo from '../src/images/screen-squid-logo.png'

export default function Home() {
    return (
        <div className='home-screen'>
            <div className='button-container'>
                <img src={screenSquidLogo} className='tilted-logo' alt="Screen Squid Shadow" />
                <Link to="/create" className="button-body left">
                    <div className='button-text'>Create a Room</div>
                </Link>
                <Link to="/create" className="button-body">
                    <div className='button-text'>Join a Room</div>
                </Link>
            </div>
        </div>



    )
}