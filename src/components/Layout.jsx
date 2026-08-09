import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

function Layout(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/users')
        .then(response => {
            if (!response.ok) {throw new Error("Failed to fetch the data")};
            return response.json();
        })
        .then(data => setUsers(data))
        .catch(error => console.error(error))
    }, []);
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <Outlet context={users}/>
        </>
    )
}

export default Layout