import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;