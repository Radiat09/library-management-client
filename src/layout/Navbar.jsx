import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  // console.log(user);
  return (
    <div className=" w-full max-w-[1200px] px-[25px] mx-auto">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 text-4xl font-extrabold">
        <Link to="/">
          <span className="text-red-500">Livaro</span> Li.
        </Link>
      </div>
      <div className="flex-none hidden lg:block">
        <div className="flex items-center gap-4">
          {/* Navbar menu content here */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn text-red-500 border-red-500 hover:text-red-500 hover:border-red-500 btn-sm rounded-none"
                : "btn bg-red-500 hover:text-red-500 hover:border-red-500 text-white btn-sm  rounded-none"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/addbooks"
            className={({ isActive }) =>
              isActive
                ? "btn text-red-500 border-red-500 hover:text-red-500 hover:border-red-500 btn-sm rounded-none"
                : "btn bg-red-500 hover:text-red-500 hover:border-red-500 text-white btn-sm rounded-none"
            }
          >
            Add Books
          </NavLink>
          <NavLink
            to="/allbooks"
            className={({ isActive }) =>
              isActive
                ? "btn text-red-500 border-red-500 hover:text-red-500 hover:border-red-500 btn-sm rounded-none"
                : "btn bg-red-500 hover:text-red-500 hover:border-red-500 text-white btn-sm  rounded-none"
            }
          >
            All Books
          </NavLink>
          <NavLink
            to="/borrowedbooks"
            className={({ isActive }) =>
              isActive
                ? "btn text-red-500 border-red-500 hover:text-red-500 hover:border-red-500 btn-sm rounded-none"
                : "btn bg-red-500 hover:text-red-500 hover:border-red-500 text-white btn-sm  rounded-none"
            }
          >
            Borrowrd Books
          </NavLink>
          {user ? (
            <div>
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} className="avatar m-1">
                  <div className="w-9 rounded-full ring ring-secondary ring-offset-pink-500 ring-offset-2">
                    {user.photoURL ? (
                      <img src={user?.photoURL} />
                    ) : (
                      <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  w-24"
                >
                  {/* <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li> */}
                  <li>
                    <button
                      className="btn bg-red-500 hover:text-red-500 hover:border-red-500 text-white btn-sm rounded-none"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="navbar-end flex items-center gap-4 ">
              <NavLink
                to="/login"
                className="btn bg-red-500 hover:text-red-500 hover:border-red-500 text-white btn-sm rounded-none"
              >
                Login
              </NavLink>
              <NavLink
                to="register"
                className="btn bg-red-500 hover:text-red-500 hover:border-red-500 text-white btn-sm rounded-none"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
