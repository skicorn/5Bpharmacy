import './Header.css'
import user from '../assets/userinfo.svg'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="Header">
            <div className="Logo">
                <Link to='/' className='logo-link'>
                    OKSHOP
                </Link>
            </div>
            <div className="Userinfo">
                <div className='img'>
                    <img src={user} id="user-avt" />
                </div>
                <p id="username">username</p>
            </div>
        </div>
    )
}
export default Header;