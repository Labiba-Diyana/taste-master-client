import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/custom-images/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelLogOut = () => {
        logOut()
            .then(() => { 
                navigate('/login')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar mx-auto max-w-screen-2xl py-2 px-6 lg:px-14 fixed z-10 bg-white bg-opacity-90">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/" style={({ isActive }) => ({
                                    color: isActive ? '#DAA425' : '',
                                    background: isActive ? 'transparent' : 'transparent'
                                })}>Home</NavLink></li>
                        <li><NavLink to="/blog" style={({ isActive }) => ({
                                    color: isActive ? '#DAA425' : '',
                                    background: isActive ? 'transparent' : 'transparent'
                                })}>Blog</NavLink></li>
                        {
                            user?.email && <li onClick={handelLogOut}>Logout</li>
                        }

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
                    <ul className="menu menu-horizontal text-base font-semibold items-center px-1 space-x-10">
                        <li><NavLink to="/" style={({ isActive }) => ({
                                    color: isActive ? '#DAA425' : '',
                                    background: isActive ? 'transparent' : 'transparent'
                                })}>Home</NavLink></li>
                        <li><NavLink to="/blog" style={({ isActive }) => ({
                                    color: isActive ? '#DAA425' : '',
                                    background: isActive ? 'transparent' : 'transparent'
                                })}>Blog</NavLink></li>
                        {
                            user?.email && <li onClick={handelLogOut}>Logout</li>
                        }
                    </ul>
                </div>
                <div>
                    {
                        user?.email ?
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0}>
                                    <div className="avatar online">
                                        <div className="w-10 lg:w-12 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 pl-5">
                                    {user?.displayName}
                                </ul>
                            </div>
                            :
                            <NavLink to="/login"><button className="btn bg-[#DAA425] w-20 lg:w-24 text-white rounded-full border-none">Login</button></NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;