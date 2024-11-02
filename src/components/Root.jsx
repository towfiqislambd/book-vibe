import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Root = () => {
    return (
        <div>
            <div className="container mx-auto px-5">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;