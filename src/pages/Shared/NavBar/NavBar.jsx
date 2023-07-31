import logo from '../../../assets/custom-images/logo.png'


const NavBar = () => {

    return (
        <div className="navbar mx-auto max-w-screen-2xl py-2 px-14 fixed z-10 bg-white bg-opacity-90">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>Home</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <div className="hidden lg:block mr-3">
                    <img src={logo} alt="" />
                    </div>
                    <h2 className="text-xl lg:text-3xl font-semibold">
                        <span className="text-[#CB4154]">Taste</span>
                        <span className="text-[#DAA425] pl-1">Master</span>
                    </h2>
                </div>
            </div>
            <div className="navbar-end space-x-10">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-10">
                        <li>Home</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;