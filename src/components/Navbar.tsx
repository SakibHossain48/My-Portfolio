import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const navOptions = (
    <>
      <a href="#" className="cursor-pointer hover:text-main-color">
        <span className="text-main-color"></span> HOME
      </a>
      <a href="#about" className="cursor-pointer hover:text-main-color">
        <span className="text-main-color"></span> ABOUT
      </a>
      <a href="#skills" className="cursor-pointer hover:text-main-color">
        <span className="text-main-color"></span> SKILLS
      </a>
      <a href="#projects" className="cursor-pointer hover:text-main-color">
        <span className="text-main-color"></span> PROJECTS
      </a>
      <a href="#contact" className="cursor-pointer hover:text-main-color">
        <span className="text-main-color"></span> CONTACT
      </a>
    </>
  );
  return (
    <nav className="my-glass z-20 fixed w-full">
      <div className="navbar lg:w-[1300px] mx-auto">
        <div className="navbar-start">
          <a
            href="#"
            className="text-main-color font-black uppercase lg:text-4xl text-2xl select-none"
          >
            Sakib<span className="text-[#fafafa]"></span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center gap-8">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn lg:btn-md btn-sm primary-btn bg-main-color hover:bg-main-color border-0 rounded shadow-lg shadow-sec-color">
            <span>Hire me</span>
          </button>
          <div className="dropdown dropdown-left">
            <label
              tabIndex={0}
              className="lg:hidden text-2xl bg-transparent text-white border-0 btn btn-sm"
            >
              <BiMenu />
            </label>
            <ul
              tabIndex={0}
              className="menu gap-3 menu-sm dropdown-content mt-6 ms-10 p-2 shadow my-glass rounded-box w-36"
            >
              {navOptions}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
