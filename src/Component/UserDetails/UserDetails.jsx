import { useLoaderData, useNavigate } from "react-router-dom";
const UserDetails = () => {
    const userDetais = useLoaderData();
    const neviGate = useNavigate();
    const {id,name,email} = userDetais;
    const backClick = () =>{
        neviGate(-1)
    }
    return (
        <div>
            <h1>User Details</h1>
            <h2>User Id : {id}</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <button onClick={backClick}>Go Back</button>
        </div>
    );
};

export default UserDetails;