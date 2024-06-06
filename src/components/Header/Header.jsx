import { NavLink } from "react-router-dom";

const Header = () => {
    const links =
        <>
            <li className="lg:text-white mb-2 lg:mb-0 cursor-pointer hover:text-yellow-500 border hover:border-yellow-500 transition px-2 xl:px-4 py-2 text-black rounded-lg font-bold"><NavLink to='/'>Home</NavLink></li>
            <li className="lg:text-white mb-2 lg:mb-0 cursor-pointer hover:text-yellow-500 border hover:border-yellow-500 transition px-2 xl:px-4 py-2 text-black rounded-lg font-bold"><NavLink to='/real-estate'>Real Estates</NavLink></li>
            <li className="lg:text-white mb-2 lg:mb-0 cursor-pointer hover:text-yellow-500 border hover:border-yellow-500 transition px-2 xl:px-4 py-2 text-black rounded-lg font-bold"><NavLink to='/faq'>FAQs</NavLink></li>
            <li className="lg:text-white mb-2 lg:mb-0 cursor-pointer hover:text-yellow-500 border hover:border-yellow-500 transition px-2 xl:px-4 py-2 text-black rounded-lg font-bold"><a href="#footer">Contact</a></li>
            <li className="lg:text-white mb-2 lg:mb-0 cursor-pointer hover:text-yellow-500 border hover:border-yellow-500 transition px-2 xl:px-4 py-2 text-black rounded-lg font-bold"><NavLink to='register'>Register</NavLink></li>
        </>
    return (
        <div>
            <div className="bg-[#151B2E] mb-12">
                <div className="w-11/12 lg:w-3/4 mx-auto navbar px-0 py-4 lg:py-6">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="text-yellow-500 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-52 text-black">
                                {links}
                            </ul>
                        </div>
                        <div className="w-16">
                            <img src="/logo_luxury_estate_small.png" alt="" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-6 xl:gap-12">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end gap-4">
                        <div className="w-10">
                            <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>

                        <NavLink to='/login' className="border px-4 py-2 rounded-lg cursor-pointer font-bold bg-transparent text-white hover:bg-transparent hover:border-yellow-500 hover:text-yellow-500 transition">Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;