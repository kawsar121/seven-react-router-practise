import { Link, NavLink } from "react-router-dom";
import '../HeaderCss/Header.css'
const Header = () => {
    return (
        <div className="bl">
            <h1>This is heading</h1>
            <Link>Home</Link>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/about'>About</NavLink>
            <Link to='/users'>Users</Link>
        </div>
    );
};

export default Header;