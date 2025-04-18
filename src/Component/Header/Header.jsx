import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>This is heading</h1>
            <Link>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
        </div>
    );
};

export default Header;