import { Link, useNavigate } from "react-router-dom";
//link diye o kora jaw onno niyome o kora jaw,, useNevegate
const User = ({user}) => {
    const neveGate = useNavigate();
    const{name,id,email} = user
    const handleClick = () =>{
        neveGate(`/user/${id}`)
    }
    return (
        <div>
            <h3>Name : {name}</h3>
            <p>Name : {email}</p>
            <Link to={`/user/${id}`}>User Details</Link>
            <button onClick={handleClick}>Use Detail</button>
        </div>
    );
};

export default User;