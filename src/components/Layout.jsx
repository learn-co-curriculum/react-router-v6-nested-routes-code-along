import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout(){
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <Outlet/>
        </>
    )
}