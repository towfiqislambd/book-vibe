import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-base-100 py-5 px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"  viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-500 font-medium">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/listed-books">Listed Books</NavLink></li>
                    <li><NavLink to="/pages-to-read">Pages To Read</NavLink></li>
                    </ul>
                </div>
                <a className="text-xl text-black font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-500 font-medium">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/listed-books">Listed Books</NavLink></li>
                    <li><NavLink to="/pages-to-read">Pages To Read</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-1">
                <a className="btn bg-[#36dd36] min-h-0 h-11 text-gray-100">Sign In</a>
                <a className="btn bg-[#47a7f5] min-h-0 h-11 text-gray-100">Sign Up</a>
            </div>
        </nav>
    );
};

export default NavBar;