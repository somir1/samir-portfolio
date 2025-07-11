import logo from "../assets/icons/favicon-32x32.png";

const Header = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 border-b border-gray-700 shadow-sm backdrop-blur-md"
      style={{ backgroundColor: "#252c34" }}
    >
      <div className="navbar container mx-auto px-4 py-3">
        <div className="flex-1 flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <a className="normal-case text-2xl font-exo text-white">
            Samir Hossain
          </a>
        </div>

        {/* Mobile menu */}
        <div className="flex-none lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-square text-white">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Desktop menu */}
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="#home"
                className="text-white hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-white hover:text-blue-400 transition-colors duration-200"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-white hover:text-blue-400 transition-colors duration-200"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
