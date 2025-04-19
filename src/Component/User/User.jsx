import { Link } from "react-router-dom";

const User = ({user}) => {
    const{name,id,email} = user
    return (
        <div>
            <h3>Name : {name}</h3>
            <p>Name : {email}</p>
            <Link to={`/user/${id}`}>User Details</Link>
        </div>
    );
};

export default User;