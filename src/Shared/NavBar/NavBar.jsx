import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to='/' className={`text-lg hover:text-yellow-400 bg-transparent ${({ isActive }) => (isActive ? "active" : "")}`}>Home</NavLink>
      </li>
      <li>
        <NavLink to='/contact' className={`text-lg hover:text-yellow-400 bg-transparent ${({ isActive }) => (isActive ? "active" : "")}`}>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to='/dashboard' className={`text-lg hover:text-yellow-400 bg-transparent ${({ isActive }) => (isActive ? "active" : "")}`}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to='/menu' className={`text-lg hover:text-yellow-400 bg-transparent ${({ isActive }) => (isActive ? "active" : "")}`}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to='/shop' className={`text-lg hover:text-yellow-400 bg-transparent ${({ isActive }) => (isActive ? "active" : "")}`}>Our Shop</NavLink>
      </li>
    </>
  );

  return (
    <>
      <nav className="px-6 py-2 fixed z-50 backdrop:blur-sm bg-opacity-30 max-w-screen-xl bg-black text-white left-1/2 translate-x-[-50%] w-full">
        <div className="flex justify-between items-center">
            <div>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                    />
                </svg>
                </label>
                <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                {navOptions}
                </ul>
            </div>
            <Link to='/' className="text-lg font-bold">Bistro Boss <span className="font-light hidden lg:block">Restaurant</span></Link>
            </div>
            <div className="flex items-center">
            <ul className="menu menu-horizontal px-1 hidden lg:flex">{navOptions}</ul>
            <div className="w-4 h-4 bg-slate-100"></div>
            </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
