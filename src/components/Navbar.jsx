import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border border-[#23BE0A] text-[#23BE0A]  hover:bg-[#23BE0A] hover:text-white font-bold "
              : "font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listedBooks"
          className={({ isActive }) =>
            isActive
              ? "border border-[#23BE0A] text-[#23BE0A]  hover:bg-[#23BE0A] hover:text-white font-bold "
              : "font-bold"
          }
        >
         Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pagesRead"
          className={({ isActive }) =>
            isActive
              ? "border border-[#23BE0A] text-[#23BE0A]  hover:bg-[#23BE0A] hover:text-white font-bold "
              : "font-bold"
          }
        >
         Pages to Read
        </NavLink>
      </li>

      
    </>
  );
  return (
    <div className="navbar  bg-base-100 fixed z-20  shadow-sm">
      <div className="navbar-start  ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  "
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost font-bold text-2xl">Book Vibe</Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-1">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white"> Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
