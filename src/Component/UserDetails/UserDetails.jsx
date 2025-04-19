import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userDetais = useLoaderData();
    const {id,name,email} = userDetais;
    return (
        <div>
            <h1>User Details</h1>
            <h2>User Id : {id}</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserDetails;